import model from "../../db/models";
import { tokenization } from "../../handler/login-handler";

const getLectureData = (_nik) => {
  const response = model.lecturer
    .findOne({
      raw: true,
      attributes: {
        exclude: ["id", "departmentId", "lecturer_nik"],
      },
      where: { nik: _nik },
    })
    .then((item) => {
      return Promise.resolve(item);
    })
    .catch((err) => {
      return Promise.reject(err);
    });

  return response;
};

export const postLoginLecture = (req, res, next) => {
  let { body } = req;

  tokenization(body, false)
    .then((_token) => {
      getLectureData(body.nik)
        .then((data) => {
          res.status(200).json({
            status: 200,
            message: "success",
            data: { token: _token, userData: data },
          });
        })
        .catch((err) => {
          res.status(500).json({
            status: 500,
            message: err,
            token: "",
          });
        });
    })
    .catch(() => {
      res.status(400).json({
        status: 400,
        message: "The Lecture NIK or Password You Entered is Incorrect!",
        token: "",
      });
    });
};
