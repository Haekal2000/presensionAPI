import nodemailer from "nodemailer";

export const sendMail = async (req, res, next) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: "haekal762013@gmail.com",
        pass: "kal1243576",
      },
    });

    const mailOptions = {
      from: "renaldykhrsm8@gmail.com",
      to: "1973009@maranatha.ac.id",
      subject: "Sending Email using Nodejs",
      html: "<h1>Welcome</h1><p>That was easy!</p>",
    };

    transporter.sendMail(mailOptions, (err, info) => {
        res.status(200).json({ status: 200, message: `email sent: ${info}`});
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: "test" });
  }
};
