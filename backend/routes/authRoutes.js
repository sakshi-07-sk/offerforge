const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const admin = require('firebase-admin');

const db = admin.firestore();
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('email', '==', email).limit(1).get();
    
    if (snapshot.empty) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const userDoc = snapshot.docs[0];
    const user = userDoc.data();
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: userDoc.id, role: user.role, name: user.name },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    );
    
    res.json({ token, user: { id: userDoc.id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('email', '==', email).limit(1).get();
    
    if (!snapshot.empty) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserRef = await usersRef.add({
      name,
      email,
      password: hashedPassword,
      role: role || 'Candidate', // Default to Candidate if not provided
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    res.json({ message: 'User created successfully', user: { id: newUserRef.id, name, role } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
