import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import TodoForm from './todo';
import WelcomePage from './welcomepage';
import Viewtodolist from './viewtodolist';
import Edittodolist from './edittodolist';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            ToDo Application
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/view">View ToDos</Button>
          <Button color="inherit" component={Link} to="/add">Add ToDo</Button>
        </Toolbar>
      </AppBar>

      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/add" element={<TodoForm />} />
          <Route path="/view" element={<Viewtodolist />} />
          <Route path="/edit/:id" element={<Edittodolist />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
