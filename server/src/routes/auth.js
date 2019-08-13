// ==============================================
// Auth Routes
// ==============================================

// Dependencies:
const express = require("express");
const authController = require("../controllers/auth");

// Create Router:
const router = express.Router();

// Create Route Handlers:
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

module.exports = router;
