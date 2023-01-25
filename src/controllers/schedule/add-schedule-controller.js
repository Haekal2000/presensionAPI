import model from "../../db/models";
import randomstring from "randomstring";
import bcrypt from "bcrypt";

export const PostSchedule = (req, res, next) => {
  const { body } = req;
  model.schedule
    .create({
      ...body,
      id: randomstring.generate({
        length: 5,
        charset: "alphabetic",
      }),
      password: bcrypt.hashSync(body.course_id, bcrypt.genSaltSync(10))
    })
    .then(() => {
      res
        .status(200)
        .json({ status: 200, message: "Create Schedule Success!" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err.toString() || "" });
    });
};
