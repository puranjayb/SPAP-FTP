const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser')
const User = require("../models/userModel");

dotenv.config();

const salt = bcrypt.genSaltSync(10);

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
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please provide email and password." });
    }

    const user = await User.findOne({where: { email }});

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const tokenPayload = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    try {
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {});
    res.cookie("token", token, { httpOnly: true, secure: true }).json({
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
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, process.env.JWT_SECRET, {}, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      res.json(decoded);
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
