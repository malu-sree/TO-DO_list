
const mongoose = require('mongoose');
const userModel = require('./usermodel');

const todoSchema = new mongoose.Schema({
  user_id:{type:mongoose.Schema.Types.ObjectId,ref:userModel},
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true }
},{timestamps:true});


const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
