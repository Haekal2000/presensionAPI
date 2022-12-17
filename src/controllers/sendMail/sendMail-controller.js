import nodemailer from "nodemailer";

export const sendMail = async (req, res, next) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "TAMengenaskan@gmail.com",
        pass: "simsalabim12345",
      },
      port: 465,
      host: "smtp.gmail.com"
    });

    const mailOptions = {
      from: "TAMengenaskan@gmail.com",
      to: "1973009@maranatha.ac.id",
      subject: "Sending Email using Nodejs",
      html: "<h1>Welcome</h1><p>That was easy!</p>",
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) console.log(err);
        res.status(200).json({ status: 200, message: `email sent: ${info}`});
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: "test" });
  }
};
