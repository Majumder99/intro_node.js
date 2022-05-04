var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "AppEmail",
    pass: "AppPassword",
  },
});

var mailOptions = {
  from: "youremail@gmail.com",
  to: "friendemail@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: ");
  }
});
