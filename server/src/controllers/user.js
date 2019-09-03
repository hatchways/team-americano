// ==============================================
// Auth Route Controllers
// ==============================================

// Dependencies:
const User = require("../models/user");

// Controllers:
exports.getContacts = async (req, res, next) => {
  // Get the currently authenticated users contacts list:
  try {
    const query = { "$regex": req.query.q || "", "$options": "$i" };
    const data = await User
      .findById(req.user._id)
      .select("contacts")
      .populate({
        path: "contacts",
        match: { "$or": [{ "email": query }, { "name": query }]},
        select: "name email _id"
      });

    return res.status(200).json({
      message: "Successfully fetched user contacts list.",
      data
    });
  } catch(e) {
    res.status(500).json({
      message: "Error(s) fetching user contacts.",
      errors: e
    });
  }
}
