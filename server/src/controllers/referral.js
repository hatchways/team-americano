// ==============================================
// Referral Route Controller
// ==============================================

// Dependencies:
let nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

// Controller:
exports.sendReferral = async (req, res) => {
  console.log(req.body);
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  let mailOptions = {
    from: '"Team Americano" teamamericano@gmail.com',
    to: req.body.email,
    subject: "Invitation to Team Americano's app",
    html: `<h1>Check out Team Americano's app by clicking this referral link!</h1><a href=${req.body.link}>${req.body.link}</a>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent!", info.messageId, info.response);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log(
      "Copy the Preview URL into your browser's address bar to see a preview of the email"
    );
  });
};
