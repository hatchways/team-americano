// ==============================================
// Referral Routes
// ==============================================

// Dependencies:
const express = require("express");
const referralController = require("../controllers/referral");

// Create Router:
const router = express.Router();

// Create Route Handlers:
router.post("/referral", referralController.sendReferral);

module.exports = router;
