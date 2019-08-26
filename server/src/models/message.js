// ==============================================
// Mongoose Message Schema
// ==============================================

// Dependencies:
const mongoose = require("mongoose");

// Get schema and objectId:
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

// Message Schema:
const messageSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now()
  },
  content: {
    type: String,
    validate: [(content) => content.length >= 1, "Message can't be empty."],
    required: [true, "Message must have content."]
  },
  sender: {
    type: objectId,
    ref: "User",
    required: [true, "Message must have a sender."]
  },
  language: {
    type: String,
    required: [true, "Message must have an original language."]
  },
  conversation: {
    type: objectId,
    ref: "Conversation",
    required: [true, "Message must belong to a conversation."]
  }
});

module.exports = mongoose.model("Message", messageSchema);
