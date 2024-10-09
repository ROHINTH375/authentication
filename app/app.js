const express = require('express');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
require('dotenv').config(); // Ensure you have dotenv installed and required

// Connect to MongoDB
connectDB();

// Route Handlers
// app.use('/api/auth', authRoutes);
// app.use('/api/user', userRoutes);


const app = express();
app.use(express.json()); // Middleware to parse JSON

// Sample user object (in a real application, you would retrieve this from your database)
const user = {
  id: 1,
  username: 'exampleUser',
  email: 'user@example.com'
};

// Login route
app.post('/login', (req, res) => {
  // Here you would normally verify user credentials (username/password)
  
  // Create the JWT payload (data you want to include)
  const payload = {
    userId: user.id,
    username: user.username
  };

  // Generate the JWT
  const token = jwt.sign(payload, process.env.JWT_SECRET); // Token expires in 1 hour

  // Send the token back to the client
  res.json({ token });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
