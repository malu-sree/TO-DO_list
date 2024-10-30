import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import todoImage from './images/img1.avif'; // Import your image file

const WelcomePage = ({ handleViewChange }) => {
  return (
    <Container className="mt-5 text-center">
      <Typography variant="h4" style={{ color: 'black', fontWeight: 'bold' }} gutterBottom>
        Welcome to the ToDo App
      </Typography>
      <Typography variant="body1" style={{ color: 'black' }} gutterBottom>
        Use the app to manage your tasks efficiently. Click below to get started.
      </Typography>

      {/* <div style={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={() => handleViewChange('add')} style={{ marginRight: '10px' }}>
          Add ToDo
        </Button>
        <Button variant="contained" color="secondary" onClick={() => handleViewChange('list')}>
          View ToDo List
        </Button>
      </div> */}

      <div style={{ marginTop: '20px' }}>
        <img
          src={todoImage} 
          alt="ToDo Illustration"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }} 
        />
      </div>
    </Container>
  );
};

export default WelcomePage;
