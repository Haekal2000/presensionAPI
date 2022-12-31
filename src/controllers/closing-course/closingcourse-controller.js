import model from "../../db/models";
import randomstring from "randomstring";
import { Sequelize } from "sequelize";

export const PutClosingCourse = (req, res, next) => {
  const { body } = req;
  const Op = Sequelize.Op;
  model.schedulerecord
    .findOne({
      where: {
        isComplete: true,
        course_id: body.course_id,
        lecturer_nik: body.lecturer_nik,
        createdAt: {
          [Op.gt]: new Date().setHours(0, 0, 0, 0),
          [Op.lt]: new Date(),
        },
      },
    })
    .then((item) => {
      if (item) {
        res.status(500).json({ status: 500, message: "Course Already Closed" });
      } else {
        model.schedulerecord
          .create({
            ...body,
            id: randomstring.generate({
              length: 5,
              charset: "alphabetic",
            }),
          })
          .then(() => {
            res.status(200).json({
              status: 200,
              message: "Finished Course already updated!",
            });
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
