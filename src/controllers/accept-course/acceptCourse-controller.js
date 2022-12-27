import { decrypt } from "../../utils/encryptor";
import bcrypt from "bcrypt";
import model from "../../db/models";
import randomstring from "randomstring";
import { mode } from "crypto-js";

export const AcceptCourse = (req, res, next) => {
  const { token, student_id, lecturer_nik, acceptDate, isPresent, schedule_id } =
    req.body;

  const decryptedToken = decrypt(token);

  if (!decryptedToken) {
    res.status(500).json({
      status: 500,
      message: "Failed! Your Token is wrong!",
      data: {},
    });
  }

  model.schedule
    .findAndCountAll({
      raw: true,
      attributes: {
        exclude: ["academicperiodId", "courseId", "lecturerId"],
      },
      where: { course_id: decryptedToken },
    })
    .then(({ count, rows }) => {
      if (
        count === 1 &&
        bcrypt.compareSync(decryptedToken, rows[0]["password"]) === true
      ) {
        model.finishedcourse
          .create({
            id: randomstring.generate({
              length: 5,
              charset: "alphabetic",
            }),
            course_id: decryptedToken,
            ...{ student_id, lecturer_nik, acceptDate, isPresent, schedule_id },
          })
          .then(() => {
            res
              .status(200)
              .json({ status: 200, message: "Course Accepted Success!" });
          })
          .catch((err) => {
            res.status(500).json({ status: 500, message: err });
          });
      } else {
        res.status(500).json({ status: 500, message: "not match course id" });
      }
    })
    .catch((err) => {
        console.log('err: ', err);
      res.status(500).json({ status: 500, message: err });
    });
};
