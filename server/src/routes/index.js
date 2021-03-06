var express = require("express");
var router = express.Router();
const passport = require("passport");

require("../middleware/passport");

router.get("/welcome", function(req, res, next) {
  res.status(200).send({ welcomeMessage: "Step 1 (completed)" });
});

router.use("/api/auth", require("./auth"));
router.use(
  "/api/invitation",
  passport.authenticate("jwt", { session: false }),
  require("./invitation")
);
router.use(
  "/api/user",
  passport.authenticate("jwt", { session: false }),
  require("./user")
);
router.use(
  "/api/conversation",
  passport.authenticate("jwt", { session: false }),
  require("./conversation")
);
router.use("/api/referral", require("./referral"));

module.exports = router;
