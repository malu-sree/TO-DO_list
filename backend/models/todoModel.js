// models/todoModel.js
const mongoose = require('mongoose');

// Define the ToDo schema
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true }
},{timestamps:true});

// Create and export the ToDo model
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
