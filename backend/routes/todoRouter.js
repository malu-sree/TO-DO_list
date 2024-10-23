// routes/todoRouter.js
const express = require('express');
const { createTodo, getTodos } = require('../controllers/todoControllers');

const router = express.Router();

// Create a new ToDo
router.post('/', createTodo);

// Get all ToDos
router.get('/', getTodos);

module.exports = router;
