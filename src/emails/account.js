const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pkpkvac@gmail.com",
    subject: "Test intro",
    text: `Did you get this, ${name}?`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pkpkvac@gmail.com",
    subject: "Cancel",
    text: `Hasta la vista, ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};

// sgMail.send({
//   to: "pkpkvac@gmail.com",
//   from: "pkpkvac@gmail.com",
//   subject: "This is a test",
//   text: "Did you get it?",
// });
