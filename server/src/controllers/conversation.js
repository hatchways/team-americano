// ==============================================
// Convsersation Route Controllers
// ==============================================

// Dependencies:
const Conversation = require("../models/conversation");
const { Translate } = require("@google-cloud/translate");

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

    // Map over the message field and change it to proper format:
    conversation.messages = await Promise.map( conversation.messages, async message => {
      // Get translate function:
      const translate = new Translate({ projectId: process.env.GOOGLE_CLIENT_KEY });

      // Get text and target language:
      const text = message.content;
      const target = req.user.language;
      const language = message.language;

      // Get translated message:
      const [translation] = await translate.translate(text, { to: target, from: language });

      // Returned modified message:
      return {
        original_message: message.content,
        translated_message: translation,
        from_user_id: message.sender,
        created_at: message.timestamp
      }
    });

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
