// ==============================================
// Auth Route Controllers
// ==============================================

// Dependencies:
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Get Private Key:
const privateKey = process.env.PRIVATE_KEY;
const signOptions = { algorithm: "HS256" }

// Controllers:
exports.registerUser = async (req, res, next) => {
  // Create new user:
  try {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      ...req.body
    });

    const result = await user.save();
    const token = await jwt.sign(user, privateKey, signOptions);
    // Return user and JWT token:
    res.set("Authorization", "Bearer " + token);

    return res.status(201).json({
      message: "Successfully registered new user.",
      data: {
        email: result.email,
        name: result.name,
        _id: result._id,
        language: result.language
      }
    });

  } catch (e) {
    return res.status(500).json({
      message: "Error(s) registering account.",
      errors: e
    });
  }
}

exports.loginUser = async (req, res, next) => {
  // Verify user:
  try {
    const user = await User.findOne({ email: req.body.email }).exec();

    user.comparePassword(req.body.password, (error, match) => {
      if (!match) {
        throw new Error("Invalid login credentials.");
      }
    });

    const token = jwt.sign(user, privateKey, signOptions);

    // Return user and JWT:
    res.set("Authorization", "Bearer " + token);

    res.status(200).json({
      message: "Successfully logged into account.",
      data: {
        email: user.email,
        name: user.name,
        language: user.language,
        _id: user._id
      }
    });

  } catch (e) {
    return res.status(500).json({
      message: "Error(s) logging into account.",
      errors: e
    });
  }
}
