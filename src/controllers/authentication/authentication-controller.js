import studentModel from "../../db/models";
import { tokenization } from "../../handler/login-handler";

export const getLoginStudent = async (req, res, next) => {
  try {
    const userData = await studentModel.student.findAll({
      attributes: { exclude: ["password"] },
    });
    res
      .status(200)
      .json({
        status: 200,
        message: "Access Granted",
        data: userData,
        innerMessage: "",
      });
  } catch (err) {
    res
      .status(500)
      .json({
        status: 500,
        message: JSON.stringify(err),
        data: [],
        innerMessage: "",
      });
  }
};

export const postLoginStudent = async (req, res, next) => {
  try {
    let { body } = req;
    const userToken = await tokenization(body);
    if (userToken) {
      res
        .status(200)
        .json({ status: 200, message: "success", token: userToken });
    } else {
      res
        .status(400)
        .json({
          status: 400,
          message: "The Username or Password You Entered is Incorrect",
          token: "",
        });
    }
  } catch (Err) {
    res.status(500).json({ status: 500, message: Err, token: "" });
  }
};
