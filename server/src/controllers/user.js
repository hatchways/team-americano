// ==============================================
// Auth Route Controllers
// ==============================================

// Dependencies:
const User = require("../models/user");

// Controllers:
exports.getAuthenticatedUser = async (req, res, next) => {
  // Get the authenticated user, a list of their conversations
  // and a list of all their contacts:
  try {
    const data = await User.findById(req.user._id)
      .select("-password")
      .populate("conversations")
      .populate("contacts", "name email");

    return res.status(200).json({
      message: "Successfully fetched user information.",
      data
    });
  } catch (e) {
    return res.status(500).json({
      message: "Error(s) getting authenticated user information.",
      errors: e
    });
  }
};
