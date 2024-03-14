const mongoose = require('mongoose');

const callSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true
    },
    phone_number: {
        type: Number,
    },
    priority: {
        type: Number,
        enum: [0, 1, 2],
    },
    password :{
        type : String,
        required : true
    }
},);


const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = mongoose.model('User', callSchema);
