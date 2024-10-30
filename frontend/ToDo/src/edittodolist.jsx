import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Grid, Paper, InputAdornment } from '@mui/material';
import { AccessAlarm, Description, Title } from '@mui/icons-material'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Edittodolist() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoItem = { title, description, date, time };

    
    axios.post('http://localhost:5000/api/todos', todoItem)
      .then((response) => {
        console.log('Success:', response.data);
        setMessage('Todo item added successfully!'); 
       
        setTitle('');
        setDescription('');
        setDate('');
        setTime('');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Error adding todo item. Please try again.'); // Set error message
      });
  };

  return (
    <Container component={Paper} elevation={3} className="mt-5 p-4">
      <Typography variant="h4" align="center" gutterBottom>
        ToDo List
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Title />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Description />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccessAlarm />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Time"
              type="time"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} className="text-center">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      {message && (
        <Typography variant="body1" align="center" style={{ marginTop: '20px', color: 'green' }}>
          {message}
        </Typography>
      )}
    </Container>
  );
}

export default Edittodolist;