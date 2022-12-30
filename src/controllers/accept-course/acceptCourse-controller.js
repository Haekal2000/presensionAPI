import { decrypt } from "../../utils/encryptor";
import bcrypt from "bcrypt";
import model from "../../db/models";
import randomstring from "randomstring";
import { Sequelize } from "sequelize";

export const AcceptCourse = (req, res, next) => {
  const {
    course_code,
    student_id,
    lecturer_nik,
    isPresent,
    schedule_id,
    course_id,
  } = req.body;

  const Op = Sequelize.Op;
  const decryptedToken = decrypt(course_code);

  if (!decryptedToken) {
    res.status(500).json({
      status: 500,
      message: "Failed! Your Token is wrong!",
      data: {},
    });
  }

  model.finishedcourse
    .findOne({
      attributes: {
        exclude: ["finishedcourseId"],
      },
      where: {
        student_id: student_id,
        course_id: course_id,
        isPresent: true,
        acceptDate: {
          [Op.gt]: new Date().setHours(0, 0, 0, 0),
          [Op.lt]: new Date(),
        },
      },
    })
    .then((item) => {
      console.log("item: ", item);
      if (item) {
        res
          .status(500)
          .json({ status: 500, message: "Data is Already Exist!" });
      } else {
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
                  acceptDate: new Date(),
                  ...{
                    student_id,
                    lecturer_nik,
                    isPresent,
                    schedule_id,
                  },
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
              res
                .status(500)
                .json({ status: 500, message: "not match course id" });
            }
          })
          .catch((err) => {
            res.status(500).json({ status: 500, message: err });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err });
    });
};
