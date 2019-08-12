// ==============================================
// Connect mongoose database to application
// ==============================================

// Dependencies:
const mongoose = require("mongoose");

// Connect to database:
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

// Log connection status to console:
mongoose.connection.on("connected", () => console.log("Successfully connected to db."));
mongoose.connection.on("disconnected", () => console.log("Successfully disconnected from db."));
mongoose.connection.on("error", () => console.log("Error connecting to db."));
