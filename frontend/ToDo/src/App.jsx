import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography, Container, Card, CardContent } from '@mui/material';
import TodoForm from './todo'; // Ensure this matches your file name
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your CSS for background styles
import todo from './images/img1.avif'

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#4A148C', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            ToDo Application
          </Typography>
          <Button variant="contained" color="primary" onClick={toggleForm}>
            {showForm ? 'Home' : 'Add ToDo'}
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        {showForm ? (
          <Card elevation={3} style={{ marginTop: '20px' }}>
            <CardContent>
              <TodoForm />
            </CardContent>
          </Card>
        ) : (
          <Container className="mt-5 text-center">
            <Typography variant="h4" style={{ color: 'black', fontWeight: 'bold' }} gutterBottom>
              Welcome to the ToDo App
            </Typography>
            <Typography variant="body1" style={{ color: 'black' }}>
              Click on "Add ToDo" to create a new task.
            </Typography>
            {/* Image Section */}
            <div style={{ marginTop: '20px' }}>
              <img
                src={todo} // Replace with your image path
                alt="ToDo Illustration"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }} // Adjust styles as needed
              />
            </div>
          </Container>
        )}
      </Container>
    </div>
  );
}

export default App;
