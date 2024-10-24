
const { json } = require('body-parser');
const Todo = require('../models/todoModel');


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


const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todo items' });
  }
};

//fetch data 
const getToDolist=async(res,req)=>{
  const todolist=await Todo.find()
  todolist.length>0?res.json(todolist):res.json([])
}

module.exports = {
  createTodo,
  getTodos,
  getToDolist
};
