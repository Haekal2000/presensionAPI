import model from "../../db/models";
import randomstring from "randomstring";

export const PutClosingCourse = (req, res, next) => {
  const { body } = req;
  model.schedulerecord.create({
      ...body,
      id: randomstring.generate({
        length: 5,
        charset: "alphabetic",
      }),
    })
    .then(() => {
      res
        .status(200)
        .json({ status: 200, message: "Finished Course already updated!" });
    })
    .catch((err) => {
      console.log('err: ', err);
      res.status(500).json({ status: 500, message: err });
    });
};
