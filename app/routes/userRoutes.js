const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Define a route for getting user data
router.get('/profile', userController.getUserProfile);

module.exports = router;
