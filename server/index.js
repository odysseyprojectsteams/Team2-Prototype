const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Use only express.json as it's sufficient for body parsing

// Routes
app.use('/api/auth', authRouter);

// MongoDB connection
mongoose
  .connect('mongodb://127.0.0.1:27017/authentification')
  .then(() => console.log('Connected to MongoDB!'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
