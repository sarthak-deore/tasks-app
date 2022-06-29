const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

const sendWelcomeEmail = (email, name) => {
  const data = {
    from: "Excited User <sarthakdeore2@gmail.com>",
    to: email,
    subject: "Thank you for signing up!",
    text: `Welcome to the app, ${name}.`,
  };
  mg.messages().send(data);
};

const sendDeletionEmail = (email, name) => {
  const data = {
    from: "Excited User <sarthakdeore2@gmail.com>",
    to: email,
    subject: "Account deleted",
    text: `We are sad to see you leave, ${name}. Please let us know what went wrong!`,
  };
  mg.messages().send(data);
};

module.exports = {
  sendWelcomeEmail,
  sendDeletionEmail,
};
