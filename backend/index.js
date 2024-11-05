
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const todoRoutes = require('./routes/todoRouter');
// const user=require('./routes/user');

// const app = express();
// const port = 5000;


// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// mongoose.connect('mongodb://127.0.0.1:27017/todo_db',)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("Database connection error:", error));


// app.use('/api/todos', todoRoutes);

// app.use('/user',user)



// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRouter');
const userRoutes = require('./routes/user');
const path = require('path');

const app = express();
const port =  5000; // Use environment variable for port

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from uploads

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/todo_db', )
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Database connection error:", error));

// Routes
app.use('/api/todos', todoRoutes);
app.use('/user', userRoutes); 

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
