const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser')
const User = require("../models/userModel");

dotenv.config();

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if required fields are provided
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide username, email, and password." });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ error: "Please provide a valid email address." });
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
      password: hashedPassword,
    });

    // Generate token
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);

    // Return success response with token and user information
    res
      .status(201)
      .json({
        token,
        user: {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
        },
      });
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
        return res.status(404).json({ error: "User not found" });
      }
  
      // Check if password is valid
      const validPassword = await bcrypt.compare(password, user.password);
      console.log("Password Comparison Result:", validPassword);
      if (!validPassword) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      const tokenPayload = {
        id: user.id,
        email: user.email,
        username: user.username,
      };
  
      // Generate and return JWT token
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {});
  
      // Set token as a cookie
      res.cookie("token", token, { httpOnly: true, secure: true }).json({
        token,
        message: "User logged in",
        username: user.username,
        email: user.email,
        id: user.id,
      });
    } catch (error) {
      console.error("Error in login:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };  

exports.profile = async (req, res) => {
    try {
        const {token} = req.cookies;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ where: { id: decoded.id } });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({
            id: user.id,
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        console.error("Error in profile:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie("token").json({ message: "User logged out" });
    } catch (error) {
        console.error("Error in logout:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
