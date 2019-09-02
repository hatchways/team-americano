// ==============================================
// Auth Routes
// ==============================================

// Dependencies:
const express = require("express");
const passport = require("passport");
const authController = require("../controllers/auth");

// Require Middleware:
require("../middleware/passport");

// Create Router:
const router = express.Router();

// Create Route Handlers:
router.get("/", passport.authenticate("jwt", { session: false }), authController.getAuthenticatedUser);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

module.exports = router;
