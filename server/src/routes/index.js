var express = require("express");
var router = express.Router();
const passport = require("passport");

require("../middleware/passport");

router.get("/welcome", function(req, res, next) {
  res.status(200).send({ welcomeMessage: "Step 1 (completed)" });
});

router.use('/api/auth', require('./auth'));
router.use('/api/invitation', passport.authenticate('jwt', { session: false }), require('./invitation'));
router.use('/api/user', require('./user'));

module.exports = router;
