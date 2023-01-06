import { tokenization } from "../../handler/login-handler";

export const PostLoginLecture = (req, res, next) => {
  let { body } = req;

  tokenization(body, false)
    .then((_token) => {
      res.status(200).json({
        status: 200,
        message: "success",
        data: { token: _token, data: {} },
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
