import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, Grid } from '@mui/material';
import axios from 'axios';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const userId = localStorage.getItem('user_id'); // Replace with actual user authentication mechanism

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todoData = { user_id: userId, title, description, date, time };

    try {
      const response = await axios.post('http://localhost:5000/api/todos', todoData);
      setMessage('Todo added successfully!');
      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
    } catch (error) {
      console.error("Error adding todo:", error);
      setMessage('Failed to add todo.');
    }
  };

  return (
    <Container component={Paper} elevation={3} className="mt-5 p-4">
      <Typography variant="h4" align="center" gutterBottom>
        Add New ToDo
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Description" fullWidth multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Date" type="date" fullWidth value={date} onChange={(e) => setDate(e.target.value)} required InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Time" type="time" fullWidth value={time} onChange={(e) => setTime(e.target.value)} required InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>Add ToDo</Button>
          </Grid>
        </Grid>
      </form>
      {message && <Typography color="primary" align="center" style={{ marginTop: '20px' }}>{message}</Typography>}
    </Container>
  );
}

export default AddTodo;
