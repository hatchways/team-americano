// ==============================================
// Invitation Route Controllers
// ==============================================

// Dependencies:
const Invitation = require("../models/invitation");

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
