// ==============================================
// Invitation Routes
// ==============================================

// Dependencies:
const express = require("express");
const invitationController = require("../controllers/invitation");

// Create Router:
const router = express.Router();

// Create Route Handlers:
router.get("/", invitationController.getPendingInvitations);
router.post("/:userId", invitationController.sendInvitation);
router.put("/:invitationId/accept", invitationController.acceptInvitation);
router.put("/:invitationId/ignore", invitationController.ignoreInvitation);

module.exports = router;
