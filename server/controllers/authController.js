const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/userModel');

dotenv.config();

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if required fields are provided
        if (!username || !email || !password) {
            return res.status(400).json({ error: "Please provide username, email, and password." });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Please provide a valid email address." });
        }

        // Check if the email is already registered
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered." });
        }

        // Create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        // Generate token
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);

        // Return success response with token and user information
        res.status(201).json({ token, user: { id: newUser.id, username: newUser.username, email: newUser.email } });
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: "Please provide email and password." });
        }

        // Find user by email
        const user = await User.findOne({ where: { email } });
        console.log("Fetched User:", user);
        
        // Check if user exists
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if password is valid
        const validPassword = bcrypt.compare(password, user.password);
        console.log("Password Comparison Result:", validPassword);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate and return JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.logout = async (req, res) => {
    try {
        res.status(200).json({ message: 'User logged out' });
    } catch (error) {
        res.status(400).json({ error });
    }
};