import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography, Container } from '@mui/material';
import WelcomePage from './welcomepage'; // Import the WelcomePage component
import TodoForm from './todo'; // Import the form component
import Viewtodolist from './viewtodolist'; // Import the ToDo List view component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import any custom CSS

function App() {
  const [view, setView] = useState('welcome'); // 'welcome', 'add', or 'list'

  // Function to handle view switching
  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div>
      {/* AppBar with buttons for navigation */}
      <AppBar position="static" style={{ backgroundColor: '#4A148C', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            ToDo Application
          </Typography>
          {/* Home Button to navigate to Welcome Page */}
          <Button variant="contained" color="default" onClick={() => handleViewChange('welcome')}>
            Home
          </Button>
          {/* Button to navigate to Add ToDo Form */}
          {/* <Button variant="contained" color="primary" onClick={() => handleViewChange('add')}>
            Add ToDo
          </Button> */}
          {/* Button to navigate to View ToDo List */}
          {/* <Button variant="contained" color="secondary" onClick={() => handleViewChange('list')}>
            View ToDo List
          </Button> */}
        </Toolbar>
      </AppBar>

      <Container>
        {/* Conditional rendering based on the current view */}
        {view === 'welcome' && <WelcomePage handleViewChange={handleViewChange} />}
        {view === 'add' && <TodoForm />}
        {view === 'list' && <Viewtodolist />}
      </Container>
    </div>
  );
}

export default App;
