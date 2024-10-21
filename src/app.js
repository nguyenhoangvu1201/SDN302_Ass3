const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', studentRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});