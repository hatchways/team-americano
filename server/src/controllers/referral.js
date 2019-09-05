// ==============================================
// Referral Route Controller
// ==============================================

// Dependencies:
let nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

// Controller:
exports.sendReferral = async (req, res) => {
  console.log(req.body);
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "96739441c0270a",
      pass: "36f6c32b742e03"
    }
  });

  let mailOptions = {
    to: req.body.email,
    subject: "Invitation to Team Americano's app",
    text: "Referral Link here"
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent!", info.messageId, info.response);
  });
};
