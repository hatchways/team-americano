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
    if (req.params.userId == req.user._id) {
      throw new Error("User cannot invite themselves.");
    }

    const user = await User.countDocuments({ _id: req.params.userId });

    if (!user) {
      throw new Error("Specified user does not exist.");
    }

    const count = await Invitation.countDocuments({ requester: req.user._id, requestee: req.params.userId });

    if (count) {
      throw new Error("Invitation already exists.");
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
    const statuses = ["Accepted", "Ignored"];
    if (!statuses.includes(req.body.status)) {
      throw new Error("Invalid status.");
    }

    await Invitation.findByIdAndUpdate(req.params.invitationId, {
      status: req.body.status
    });

    if (req.body.status === "Accepted") {
      // Add users to contacts:
      const addContact = async (u1, u2) => {
        await User.findByIdAndUpdate(u1, {
          $push: { contacts: u2 }
        });
      };
      addContact(req.user._id, req.params.userId);
      addContact(req.params.userId, req.user._id);
    }

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
