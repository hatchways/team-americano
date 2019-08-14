// ==============================================
// Mongoose Invitation Schema
// ==============================================

// Dependencies:
const mongoose = require("mongoose");

// Get schema and objectId:
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

// Invitation Schema:
const invitationSchema = new Schema({
  requester: {
    type: objectId,
    ref: "User",
    required: [true, "A requester is required to create an invitation."]
  },
  requestee: {
    type: objectId,
    ref: "User",
    required: [true, "A requestee is required to create an invitation."]
  },
  status: {
    type: String,
    required: [true, "A status is required to create an invitation."],
    default: "Pending",
    validate: [(status) => {
      const statuses = ["Pending", "Accepted", "Ignored"];
      return statuses.includes(status);
    }, "Status must either be Pending, Accepted, or Ignored"]
  }
});

module.exports = mongoose.model("Invitation", invitationSchema);
