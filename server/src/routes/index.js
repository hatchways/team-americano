var express = require("express");
var app = express();
var router = express.Router();
const passport = require("passport");
var http = require("http").createServer(app); //require http
var socket = require("socket.io"); //require socket.io

require("../middleware/passport");

app.get("/", function(req, res) {
  res.sendFile("/home/daniel/team-americano/client/public/index.html");
});

var server = http.listen(3000, function() {
  console.log("Listening on port 3000");
});

//Socket setup
var io = socket(server);

io.on("connection", function(socket) {
  console.log("a user connected", socket.id);
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
}); //listen to the connection and disconnection events and console log a message

router.get("/welcome", function(req, res, next) {
  res.status(200).send({ welcomeMessage: "Step 1 (completed)" });
});

router.use("/api/auth", require("./auth"));
router.use(
  "/api/invitation",
  passport.authenticate("jwt", { session: false }),
  require("./invitation")
);
router.use("/api/user", require("./user"));

module.exports = router;
