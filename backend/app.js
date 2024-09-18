const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Test Database Connection and Sync Models
sequelize.sync()
  .then(() => console.log('Database connected and models synced'))
  .catch((err) => console.error('Error connecting to the database:', err));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
