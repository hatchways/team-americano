// ==============================================
// Invitation Route Controllers
// ==============================================

// Dependencies:
const Conversation = require("../models/conversation");

// Controllers:
exports.fetchConversation = async (req, res, next) => {
  // Get conversation with corresponding conversationId:
  try {
    const convsersation = await Conversation.findById(req.params.conversationId)
      .populate({ path: "messages", options: { sort: { 'timestamp': -1 }}});

    // Make sure user is in conversation:
    if (!convsersation.users.some( user => user.equals(req.user._id))) {
      throw new Error("Unauthenticated.");
    }

    return res.status(200).json({
      message: "Successfully fetched conversation.",
      data: convsersation
    });
  } catch(e) {
    res.status(500).json({
      message: "Error(s) fetching conversation.",
      errors: e
    });
  }
}
