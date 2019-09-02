// ==============================================
// User Routes:
// ==============================================

// Dependencies:
const express = require("express");
const passport = require("passport");
const userController = require("../controllers/user");

// Require passport middleware:
require("../middleware/passport");

// Create Router:
const router = express.Router();

// Create Route Handlers:


module.exports = router;
