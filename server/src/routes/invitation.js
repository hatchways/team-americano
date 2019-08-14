// ==============================================
// Invitation Routes
// ==============================================

// Dependencies:
const express = require("express");
const passport = require("passport");
const invitationController = require("../controllers/invitation");

// Require Passport Middleware:
require('../middleware/passport');

// Create Router:
const router = express.Router();

// Create Route Handlers:
router.get("/", passport.authenticate('jwt', { session: false }), invitationController.getPendingInvitations);
router.post("/:userId", passport.authenticate('jwt', { session: false }), invitationController.sendInvitation);
router.put("/:invitationId", passport.authenticate('jwt', { session: false }), invitationController.respondToInvitation);

module.exports = router;
