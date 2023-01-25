import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import model from "../../db/models";
import { encrypt } from "../../utils/encryptor";
import { studentAttributes } from "../../utils/studentAttributes";

dotenv.config();

export const PostSendMail = (req, res, next) => {
  const { courseName, course_id, department_id, academic_period_id } = req.body;

  model.student
    .findAll({
      raw: true,
      attributes: studentAttributes,
      where: {
        department_id: department_id,
        academic_period_id: academic_period_id,
      },
    })
    .then((item) => {
      const listStudent = item.map((item) => item.email).join(", ");
      const token = encrypt(course_id);
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
          to: listStudent,
          subject: `Info For Course ${courseName} Schedule`,
          html: `
            <html>
              <body>
                <h3>Your Course Token for ${courseName} is: <strong>${token}</strong></h3>
              </body>
            </html>
          `,
        },
        (err, info) => {
          if (err) res.status(500).json({ status: 500, message: err.toString() || "" });
          res.status(200).json({ status: 200, message: `email sent!` });
        }
      );
    })
    .catch((err) => {
      res.status(400).json({
        status: 400,
        message: err.toString() || "",
        token: "",
      });
    });
};
