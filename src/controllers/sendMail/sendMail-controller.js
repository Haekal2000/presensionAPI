import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import CryptoJS from 'crypto-js';

export const sendMail = async (req, res, next) => {
  dotenv.config();
  const {body} = req;
  const { schedule_id, courseName } = body;

  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASS,
    },
  });

  transporter.sendMail(
    {
      from: process.env.SENDER_EMAIL,
      to: "renaldykhrsm8@gmail.com",
      subject: `Info For Course ${courseName} Schedule`,
      html: `
      <html>
        <body>
          <h3>your course token: <strong>${schedule_id}</strong></h3>
        </body>
      </html>`,
    },
    (err, info) => {
      if (err) res.status(500).json({ status: 500, message: err });
      res.status(200).json({ status: 200, message: `email sent!` });
    }
  );
};
