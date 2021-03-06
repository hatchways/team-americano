// ==============================================
// Mongoose User Schema
// ==============================================

// Dependencies:
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Get shcema and objectId:
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

// User Schema:
const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Your email address is required to create an account."],
    validate: [(email) => {
      const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email);
    }, "Please provide a valid email address."],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email address."]
  },
  password: {
    type: String,
    required: [true, "A password is required to create an account."],
    validate: [(password) => {
      return password.length >= 6;
    }, "Your password must be atleast six characters long."]
  },
  name: {
    type: String,
    required: [true, "Your name is required to create an account."],
    validate: [(name) => {
      return name.length > 0;
    }, "Your name can't be empty."]
  },
  language: {
    type: String,
    default: "en",
    lowercase: true
  },
  contacts: [{
    type: objectId,
    ref: "User"
  }]
});

// User Methods:
userSchema.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function(plainText, callback) {
  return callback(null, bcrypt.compareSync(plainText, this.password));
};

// Export User Schema:
module.exports = mongoose.model("User", userSchema);
