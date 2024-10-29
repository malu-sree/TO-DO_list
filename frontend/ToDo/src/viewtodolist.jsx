import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Viewtodolist() {
  const [todos, setTodos] = useState([]);

  // Fetch ToDo list when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todo items:", error);
      }
    };

    fetchTodos();
  }, []); // Empty array ensures this runs only on mount


  // const deleteList =  (idn) => {
  //   const ans = window.confirm("Do you want to delete this item?");
    
  //       const api = `http://localhost:5000/api/todos${idn}`;
  //      ans?
  //      axios.delete(api)
  //      .then((res)=>{
  //       alert(res.data)
  //      })
  //      :
  //      alert("cancel")
  //     }


  const deleteList = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this ToDo?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/todos/todolistDelete/${id}`);
        alert("Todo item deleted successfully");
        setTodos(todos.filter(todo => todo._id !== id)); // Remove the deleted item from the list
      } catch (error) {
        console.error("Error deleting todo item:", error);
        alert("Failed to delete todo item");
      }
    }
  };


  return (
    <div>
      <h2>ToDo List</h2>
      {todos.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo._id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td>{todo.time}</td>
                <td><button onClick={()=>{deleteList(todo._id)}}>delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No todos available.</p>
      )}
    </div>
  );
}
