var express = require("express");
var router = express.Router();

router.get("/welcome", function(req, res, next) {
  res.status(200).send({ welcomeMessage: "Step 1 (completed)" });
});

router.use('/api/auth', require('./auth'));

module.exports = router;
