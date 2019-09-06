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
      .select("-requestee")
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
    if (req.user._id.equals(req.params.userId)) {
      return res.status(406).json({
        message: "Error(s) creating invitation.",
        errors: "Invalid request: User cannot invite themself."
      });
    }

    const user = await User.countDocuments({ _id: req.params.userId });
    const count = await Invitation.countDocuments({ requester: req.user._id, requestee: req.params.userId });

    if (!user || count) {
      return res.status(406).json({
        message: "Error(s) creating invitation.",
        errors: "Invalid Request: User does not exist."
      });
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

exports.acceptInvitation = async (req, res, next) => {
  // Update Status of Invitation to accepted:
  try {
    const invitation = await Invitation.findById(req.params.invitationId);

    if (invitation.status === "Accepted") {
      return res.status(406).json({
        message: "Error(s) responding to invitation.",
        errors: "User cannot change status of accepted invitation."
      });
    }

    if (!req.user._id.equals(invitation.requestee)) {
      return res.status(401).json({
        message: "Error(s) responding to invitation.",
        errors: "Unauthorized!"
      });
    }

    await Invitation.findByIdAndUpdate(req.params.invitationId, { status: "Accepted" });

    // Add users to each others contacts list:
    const addContact = async (u1, u2) => {
      await User.findByIdAndUpdate(u1, { $push: { contacts: u2 }});
    }

    addContact(req.user._id, invitation.requester);
    addContact(invitation.requester, req.user._id);

    return res.status(200).json({
      message: "Successfully accepted chat invitation."
    });
  } catch (e) {
    res.status(500).json({
      message: "Error(s) accepting chat invitation.",
      errors: e
    });
  }
}

exports.ignoreInvitation = async (req, res, next) => {
  // Update status of invitation to declined:
  try {
    const invitation = Invitation.findById(req.params.invitationId);

    if (invitation.status === "Accepted") {
      return res.status(406).json({
        message: "Error(s) responding to invitation.",
        errors: "User cannot change status of accepted invitation."
      });
    }

    if (!req.user._id.equals(invitation.requestee)) {
      return res.status(401).json({
        message: "Error(s) responding to invitation.",
        errors: "Unauthorized!"
      });
    }

    await Invitation.findByIdAndUpdate(req.params.invitationId, { status: "Ignored" });

    return res.status(200).json({
      message: "Successfully ignored chat invitation."
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error(s) ignoring chat invitation.",
      errors: e
    });
  }
}