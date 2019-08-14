// ==============================================
// Invitation Route Controllers
// ==============================================

// Dependencies:
const Invitation = require("../models/invitation");
const User = require("../models/user");

// Controllers:
exports.getPendingInvitations = async (req, res, next) => {
  // Get invitations where requestee is authenticated user and
  // status is pending:
  try {
    const data = await Invitation
      .find({ requestee: req.user._id, status: "Pending" })
      .populate("requester", '_id name email');

    return res.status(200).json({
      message: "Successfully fetched all pending invitations.",
      data
    });

  } catch (e) {
    res.status(500).json({
      message: "Error(s) Fetching pending invitations.",
      errors: e
    });
  }
}

exports.sendInvitation = async (req, res, next) => {
  // Create a new invitation to specified user:
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      throw new Error("Specified user does not exist.");
    }

    const invitation = new Invitation({
      requester: req.user._id,
      requestee: req.params.userId,
    });

    const result = invitation.save();
    return res.status(201).json({
      message: "Successfully created new invitation.",
      result
    });

  } catch (e) {
    return res.status(500).json({
      message: "Error(s) creating invitation.",
      errors: e
    })
  }
}

exports.respondToInvitation = async (req, res, next) => {
  // Update status of invitation:
  try {
    await Invitation.findByIdAndUpdate(req.params.invitationId, {
      status: req.body.status
    });

    return res.status(200).json({
      message: "Successfully responded to invitation."
    });
  } catch(e) {
    return res.status(500).json({
      message: "Error(s) responding to invitation.",
      errors: e
    });
  }
}
