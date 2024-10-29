
const express = require('express');
const { createTodo, getTodos,getToDolist,todolistDelete } = require('../controllers/todoControllers');

const router = express.Router();


router.post('/', createTodo);


router.get('/', getTodos);
router.get('/',getToDolist)
// router.route("/todolistDelete/:id").delete(todolistDelete)
router.delete('/todolistDelete/:id', todolistDelete);

module.exports = router;
