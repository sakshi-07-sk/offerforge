const { onRequest } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Initialize Firebase Admin
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (err) {
    console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT, falling back to default credentials:', err.message);
    admin.initializeApp();
  }
} else {
  admin.initializeApp();
}

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
const authRoutes = require('./routes/authRoutes');
const templateRoutes = require('./routes/templateRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const offerRoutes = require('./routes/offerRoutes');

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/templates', templateRoutes);
app.use('/api/v1/candidates', candidateRoutes);
app.use('/api/v1/offers', offerRoutes);

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running on Firebase Functions' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: 'error', message: err.message || 'Internal Server Error' });
});

// Export the Express app as a Firebase Function named 'api'
exports.api = onRequest({ memory: '1GiB', timeoutSeconds: 120 }, app);

// Start standalone HTTP server for Render / local environments
const PORT = process.env.PORT || 5000;
if (!process.env.FUNCTION_TARGET && !process.env.K_SERVICE) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
