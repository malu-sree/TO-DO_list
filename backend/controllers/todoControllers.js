// controllers/todoController.js
const Todo = require('../models/todoModel');

// Create a new ToDo
const createTodo = async (req, res) => {
  const { title, description, date, time } = req.body;
  try {
    const newTodo = new Todo({
      title,
      description,
      date,
      time
    });
    await newTodo.save();
    res.status(201).json({ message: 'Todo item added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add todo item' });
  }
};

// Get all ToDos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todo items' });
  }
};

module.exports = {
  createTodo,
  getTodos,
};
