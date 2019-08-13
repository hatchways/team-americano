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
    validate: [(content) => content.length >= 1, "Message can't be empty."]
  },
  sender: {
    type: objectId,
    ref: "User",
    required: "Message must have a sender."
  }
});

module.exports = mongoose.model("Message", messageSchema);
