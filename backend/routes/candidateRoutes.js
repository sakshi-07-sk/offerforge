const express = require('express');
const admin = require('firebase-admin');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');

const db = admin.firestore();
const router = express.Router();

router.use(authMiddleware);

// Get all candidates
router.get('/', async (req, res) => {
  try {
    const candidatesRef = db.collection('candidates');
    const snapshot = await candidatesRef.orderBy('createdAt', 'desc').get();
    
    const candidates = [];
    snapshot.forEach(doc => {
      candidates.push({ id: doc.id, ...doc.data() });
    });
    
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching candidates', error: error.message });
  }
});

// Add a candidate
router.post('/', roleMiddleware(['Admin', 'HR']), async (req, res) => {
  const { name, email, phone, designation, department, joiningDate, salary } = req.body;
  try {
    const candidatesRef = db.collection('candidates');
    const newDoc = await candidatesRef.add({
      name,
      email,
      phone,
      designation,
      department,
      joiningDate: new Date(joiningDate).toISOString(),
      salary,
      createdBy: req.user.id,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    res.status(201).json({ id: newDoc.id, name, email });
  } catch (error) {
    res.status(500).json({ message: 'Error adding candidate', error: error.message });
  }
});

// Update a candidate
router.put('/:id', roleMiddleware(['Admin', 'HR']), async (req, res) => {
  const { name, email, phone, designation, department, joiningDate, salary } = req.body;
  try {
    const candidateRef = db.collection('candidates').doc(req.params.id);
    await candidateRef.update({
      name,
      email,
      phone,
      designation,
      department,
      joiningDate: new Date(joiningDate).toISOString(),
      salary,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    const updatedDoc = await candidateRef.get();
    res.json({ id: updatedDoc.id, ...updatedDoc.data() });
  } catch (error) {
    res.status(500).json({ message: 'Error updating candidate', error: error.message });
  }
});

// Delete a candidate
router.delete('/:id', roleMiddleware(['Admin', 'HR']), async (req, res) => {
  try {
    await db.collection('candidates').doc(req.params.id).delete();
    res.json({ message: 'Candidate deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting candidate', error: error.message });
  }
});

module.exports = router;
