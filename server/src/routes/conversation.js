// ==============================================
// Conversation Routes:
// ==============================================

// Dependencies:
const express = require("express");
const conversationController = require("../controllers/conversation");

// Create Router:
const router = express.Router();

// Create Router Handlers:
router.route("/")
  .get(conversationController.fetchAllConversations)
  .post(conversationController.createConversation);
router.route("/:conversationId")
  .get(conversationController.fetchConversation);

// Export Router:
module.exports = router;