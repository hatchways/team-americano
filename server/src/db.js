// ==============================================
// Connect mongoose database to application
// ==============================================

// Dependencies:
const mongoose = require("mongoose");

// Connect to database:
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Require Models:
require("../src/models/user");
require("../src/models/message");
require("../src/models/conversation");
require("../src/models/invitation");

// Log connection status to console:
mongoose.connection.on("connected", () => console.log("Successfully connected to db."));
mongoose.connection.on("disconnected", () => console.log("Successfully disconnected from db."));
mongoose.connection.on("error", () => console.log("Error connecting to db."));
