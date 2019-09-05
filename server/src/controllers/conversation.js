// ==============================================
// Convsersation Route Controllers
// ==============================================

// Dependencies:
const Conversation = require("../models/conversation");
const User = require("../models/user");
const { Translate } = require("@google-cloud/translate");

// Controllers:
exports.fetchAllConversations = async (req, res, next) => {
  // Get all conversations user is participating in:
  try {
    const data = await User.findById(req.user._id)
      .select("conversations")
      .populate("conversations");

    return res.status(200).json({
      message: "Successfully fetched user conversations",
      data
    });
  } catch(e) {
    res.status(500).json({
      message: "Error(s) fetching all conversaitons.",
      errors: e
    });
  }
}

exports.fetchConversation = async (req, res, next) => {
  // Get conversation with corresponding conversationId:
  try {
    const convsersation = await Conversation.findById(req.params.conversationId)
      .populate({ path: "messages", options: { sort: { 'timestamp': -1 }}});

    // Make sure user is in conversation:
    if (!convsersation.users.some( user => user.equals(req.user._id))) {
      throw new Error("Unauthenticated.");
    }

    const promises = await conversation.messages.map( message => {
      // Get translate function:
      const translate = new Translate({ projectId: process.env.GOOGLE_CLIENT_KEY });

      // Get text and target language:
      const text = message.content;
      const target = req.user.language;
      const language = message.language;

      return translate.translate(text, { to: target, from: language })
        .then( translation => translation )
        .catch(e => {
          throw new Error("Failed to translate messages.");
        });
    });

    const status = Promise.all(promises).then( results => {
      return res.status(200).json({
        message: "Successfully fetched conversation.",
        data: {
          ...conversation,
          messages: results
        }
      });
    });

    return await status;
  } catch(e) {
    res.status(500).json({
      message: "Error(s) fetching conversation.",
      errors: e
    });
  }
}
