const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');
const cookieParser = require('cookie-parser');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());

router.post('/register', authControllers.register);
router.post('/login', authControllers.login);
router.get('/profile', authControllers.profile);
router.post('/logout', authControllers.logout);

module.exports = router;