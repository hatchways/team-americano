// ==============================================
// User Route Controllers
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
    });
  }
}

exports.getAllUsers = async (req, res, next) => {
  // Get all users matching a query string:
  try {
    const query = { "$regex": req.query.q || "", "$options": "i" };
    const data = await User
      .find({"$and": [
        { "$or": [{ "name": query }, { "email": query }]},
        { "_id": { "$ne": req.user._id, "$nin": req.user.contacts }}
      ]})
      .select("_id name email")
      .limit(parseInt(req.query.limit) || 20);

    return res.status(200).json({
      message: "Successfully fetched all users from server.",
      data
    });
  } catch(e) {
    return res.status(500).json({
      message: "Error(s) fetching users from server.",
      errors: e
    });
  }
}
