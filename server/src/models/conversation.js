// ==============================================
// Mongoose Conversation Schema
// ==============================================

// Dependencies:
const mongoose = require("mongoose");

// Get schema and objectId:
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

// Conversation Schema:
const conversationSchema = new Schema({
  members: [{
    type: objectId,
    ref: "User",
    required: [true, "A conversation must have members."]
  }],
  messages: [{
    type: objectId,
    ref: "Message"
  }]
});

module.exports = mongoose.model("Conversation", conversationSchema);
