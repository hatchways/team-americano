// ==============================================
// User Routes:
// ==============================================

// Dependencies:
const express = require("express");
const userController = require("../controllers/user");

// Create Router:
const router = express.Router();

// Create Route Handlers:
router.get("/", userController.getAllUsers);

module.exports = router;
