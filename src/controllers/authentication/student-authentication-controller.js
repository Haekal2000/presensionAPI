import { tokenization } from "../../handler/login-handler";

export const PostLoginStudent = (req, res, next) => {
  let { body } = req;
  tokenization(body, true)
    .then((token) => {
      res.status(200).json({
        status: 200,
        message: "success",
        data: { token: token, data: {} },
      });
    })
    .catch(() => {
      res.status(400).json({
        status: 400,
        message: "The Student nrpid or Password You Entered is Incorrect!",
        token: "",
      });
    });
};
