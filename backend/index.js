// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRouter');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/todo_db',)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Database connection error:", error));

// Use Routes
app.use('/api/todos', todoRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
