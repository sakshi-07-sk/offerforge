const express = require('express');
const admin = require('firebase-admin');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');
const { generatePdf } = require('../utils/pdfGenerator');
const { sendEmail } = require('../utils/emailSender');
const Groq = require('groq-sdk');

const db = admin.firestore();
const router = express.Router();

router.use(authMiddleware);

// Get all offers (Admin/HR) or specific offers for Candidate
router.get('/', async (req, res) => {
  try {
    const offersRef = db.collection('offers');
    let snapshot;
    
    if (req.user.role === 'Candidate') {
      const candidatesRef = db.collection('candidates');
      const candidateSnap = await candidatesRef.where('email', '==', req.user.email).limit(1).get();
      
      if (candidateSnap.empty) return res.json([]);
      const candidateId = candidateSnap.docs[0].id;
      
      snapshot = await offersRef.where('candidateId', '==', candidateId).get();
    } else {
      snapshot = await offersRef.orderBy('createdAt', 'desc').get();
    }

    const offers = [];
    snapshot.forEach(doc => offers.push({ id: doc.id, ...doc.data() }));
    
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching offers', error: error.message });
  }
});

// Generate an offer
router.post('/', roleMiddleware(['Admin', 'HR']), async (req, res) => {
  const { candidateId, templateId, useAI } = req.body;
  try {
    const candidateDoc = await db.collection('candidates').doc(candidateId).get();
    const templateDoc = await db.collection('templates').doc(templateId).get();
    
    if (!candidateDoc.exists || !templateDoc.exists) {
      return res.status(404).json({ message: 'Candidate or Template not found' });
    }

    const candidate = candidateDoc.data();
    const template = templateDoc.data();

    let content = template.content;

    // AI Generation Logic
    if (useAI && process.env.GROQ_API_KEY && process.env.GROQ_API_KEY !== 'your_groq_api_key_here') {
      try {
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        const prompt = `You are an expert HR assistant. I have a base offer letter template in HTML format, and I need you to generate a personalized, professional offer letter for a specific candidate. 
        
        Candidate Details:
        - Name: ${candidate.name}
        - Designation: ${candidate.designation}
        - Salary: ${candidate.salary}
        - Joining Date: ${new Date(candidate.joiningDate).toLocaleDateString()}
        
        Base Template HTML:
        ${template.content}
        
        Instructions:
        1. Replace all placeholders with the candidate details.
        2. Improve the language to make it sound highly professional, welcoming, and polished.
        3. Maintain all HTML formatting, tags, and structure so it renders correctly as a PDF.
        4. ONLY output the raw HTML code. Do not include markdown code blocks (like \`\`\`html) or any conversational text. Just the HTML string.`;

        const completion = await groq.chat.completions.create({
          messages: [{ role: 'user', content: prompt }],
          model: 'llama-3.3-70b-versatile',
          temperature: 0.5,
        });

        content = completion.choices[0]?.message?.content || content;
        
        // Clean up potential markdown formatting from LLM response
        content = content.replace(/^```(?:html)?\s*/i, '').replace(/\s*```$/i, '');
      } catch (aiError) {
        console.error("Groq AI Error, falling back to manual replacement:", aiError);
        content = content.replace(/{{candidate_name}}/g, candidate.name);
        content = content.replace(/{{salary}}/g, candidate.salary);
        content = content.replace(/{{designation}}/g, candidate.designation);
        content = content.replace(/{{joining_date}}/g, new Date(candidate.joiningDate).toLocaleDateString());
      }
    } else {
      // Standard Regex replacement
      content = content.replace(/{{candidate_name}}/g, candidate.name);
      content = content.replace(/{{salary}}/g, candidate.salary);
      content = content.replace(/{{designation}}/g, candidate.designation);
      content = content.replace(/{{joining_date}}/g, new Date(candidate.joiningDate).toLocaleDateString());
    }

    const offerRef = await db.collection('offers').add({
      candidateId,
      templateId,
      generatedContent: content,
      status: 'Draft',
      createdBy: req.user.id,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Create initial version
    await db.collection('offerVersions').add({
      offerId: offerRef.id,
      content,
      versionNumber: 1,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    // Log status
    await db.collection('offerStatusLogs').add({
      offerId: offerRef.id,
      status: 'Draft',
      changedBy: req.user.id,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(201).json({ id: offerRef.id, content, status: 'Draft' });
  } catch (error) {
    res.status(500).json({ message: 'Error generating offer', error: error.message });
  }
});

// Update offer (Inline edit)
router.put('/:id', roleMiddleware(['Admin', 'HR']), async (req, res) => {
  const { content } = req.body;
  try {
    const offerRef = db.collection('offers').doc(req.params.id);
    const offerDoc = await offerRef.get();
    
    if (!offerDoc.exists) return res.status(404).json({ message: 'Offer not found' });
    if (offerDoc.data().status === 'Accepted') return res.status(400).json({ message: 'Cannot edit accepted offer' });

    await offerRef.update({
      generatedContent: content,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // We don't have atomic counting for versions, so this is a basic implementation
    await db.collection('offerVersions').add({
      offerId: req.params.id,
      content,
      versionNumber: Date.now(), // Fallback for version counting in NoSQL
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.json({ message: 'Offer updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating offer', error: error.message });
  }
});

// Generate and Download PDF
router.get('/:id/pdf', async (req, res) => {
  try {
    const offerDoc = await db.collection('offers').doc(req.params.id).get();
    if (!offerDoc.exists) return res.status(404).json({ message: 'Offer not found' });

    const offer = offerDoc.data();
    const candidateDoc = await db.collection('candidates').doc(offer.candidateId).get();
    const candidateName = candidateDoc.exists ? candidateDoc.data().name : 'Candidate';

    const pdfBuffer = await generatePdf(offer.generatedContent);
    
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${candidateName.replace(/ /g, '_')}_Offer_Letter.pdf"`,
      'Content-Length': pdfBuffer.length
    });
    res.send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ message: 'Error generating PDF', error: error.message });
  }
});

// Send Offer Email
router.post('/:id/send', roleMiddleware(['Admin', 'HR']), async (req, res) => {
  try {
    const offerRef = db.collection('offers').doc(req.params.id);
    const offerDoc = await offerRef.get();
    
    if (!offerDoc.exists) return res.status(404).json({ message: 'Offer not found' });

    const offer = offerDoc.data();
    const candidateDoc = await db.collection('candidates').doc(offer.candidateId).get();
    const candidate = candidateDoc.data();

    const pdfBuffer = await generatePdf(offer.generatedContent);
    
    const subject = 'Your Offer Letter from Our Company';
    const html = `<p>Dear ${candidate.name},</p>
                  <p>Congratulations! We are pleased to offer you the position of ${candidate.designation}.</p>
                  <p>Please find your offer letter attached.</p>
                  <p>You can accept or reject the offer by logging into our portal using this email.</p>`;
                  
    await sendEmail(candidate.email, subject, html, [{
      filename: 'Offer_Letter.pdf',
      content: pdfBuffer
    }]);

    await offerRef.update({ status: 'Sent', updatedAt: admin.firestore.FieldValue.serverTimestamp() });

    await db.collection('offerStatusLogs').add({
      offerId: req.params.id,
      status: 'Sent',
      changedBy: req.user.id,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
});

// Update Status (Accept/Reject)
router.patch('/:id/status', async (req, res) => {
  const { status, signatureData } = req.body;
  try {
    const offerRef = db.collection('offers').doc(req.params.id);
    const offerDoc = await offerRef.get();
    
    if (!offerDoc.exists) return res.status(404).json({ message: 'Offer not found' });

    if (status === 'Accepted' && signatureData) {
      await db.collection('signatures').add({
        offerId: req.params.id,
        signatureUrl: signatureData,
        ipAddress: req.ip,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
    }

    await offerRef.update({ status, updatedAt: admin.firestore.FieldValue.serverTimestamp() });

    await db.collection('offerStatusLogs').add({
      offerId: req.params.id,
      status,
      changedBy: req.user.id,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.json({ message: `Offer ${status.toLowerCase()} successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Error updating status', error: error.message });
  }
});

module.exports = router;
