const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const router = express.Router();
const User = require('../Models/userModel');

// User registration route
router.post('/user/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the email address already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // Return an error response if the email address is already in use
            return res.status(400).json({ message: 'Email address already in use' });
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with hashed password
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        // Generate JWT token for the newly registered user
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ userId: newUser._id }, jwtSecretKey);

        // Send the token as the response
        res.json({ token });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
