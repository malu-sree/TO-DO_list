
const express = require('express');
const { createTodo, getTodos,getToDolist } = require('../controllers/todoControllers');

const router = express.Router();


router.post('/', createTodo);


router.get('/', getTodos);
router.get('/',getToDolist)

module.exports = router;
