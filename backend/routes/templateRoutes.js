const express = require('express');
const admin = require('firebase-admin');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

const db = admin.firestore();
const router = express.Router();

router.use(authMiddleware);

// Get all templates
router.get('/', async (req, res) => {
  try {
    const templatesRef = db.collection('templates');
    const snapshot = await templatesRef.orderBy('createdAt', 'desc').get();
    
    const templates = [];
    snapshot.forEach(doc => {
      templates.push({ id: doc.id, ...doc.data() });
    });
    
    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching templates', error: error.message });
  }
});

// Create a template
router.post('/', roleMiddleware(['Admin', 'HR']), async (req, res) => {
  const { name, content } = req.body;
  try {
    const templatesRef = db.collection('templates');
    const newDoc = await templatesRef.add({
      name,
      content,
      createdBy: req.user.id,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    res.status(201).json({ id: newDoc.id, name, content });
  } catch (error) {
    res.status(500).json({ message: 'Error creating template', error: error.message });
  }
});

// Update a template
router.put('/:id', roleMiddleware(['Admin', 'HR']), async (req, res) => {
  const { name, content } = req.body;
  try {
    const templateRef = db.collection('templates').doc(req.params.id);
    await templateRef.update({
      name,
      content,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    const updatedDoc = await templateRef.get();
    res.json({ id: updatedDoc.id, ...updatedDoc.data() });
  } catch (error) {
    res.status(500).json({ message: 'Error updating template', error: error.message });
  }
});

// Delete a template
router.delete('/:id', roleMiddleware(['Admin', 'HR']), async (req, res) => {
  try {
    await db.collection('templates').doc(req.params.id).delete();
    res.json({ message: 'Template deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting template', error: error.message });
  }
});

module.exports = router;
