// ==============================================
// User Routes:
// ==============================================

// Dependencies:
const express = require("express");
const userController = require("../controllers/user");

// Create Router:
const router = express.Router();

// Create Route Handlers:
router.get("/contacts", userController.getContacts);

module.exports = router;
