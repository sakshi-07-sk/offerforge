const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, html, attachments = []) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: process.env.SMTP_PORT || 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Offer Letter Builder" <${process.env.SMTP_USER || 'no-reply@offerbuilder.com'}>`,
    to,
    subject,
    html,
    attachments,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

module.exports = { sendEmail };
