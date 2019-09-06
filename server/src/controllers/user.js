// ==============================================
// User Route Controllers
// ==============================================

// Dependencies:
const User = require("../models/user");

// Controllers:
exports.getAllUsers = async (req, res, next) => {
  // Get all users matching a query string:
  try {
    const regex = { "$regex": req.query.q || "", "$options": "i" };
    const data = await User
      .find({"$and": [
        { "$or": [{ "name": regex }, { "email": regex }]},
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
