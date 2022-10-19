import model from "../../db/models";
import { tokenization } from "../../handler/login-handler";
import { studentAttributes } from "../../utils/studentAttributes";

export const getLoginStudent = async (req, res, next) => {
  try {
    let { query } = req;
    const allUserData = await model.student.findOne({
      raw: true,
      attributes: { exclude: ["password", "departmentId", "academicperiodId"] },
      where: { id: query.nrpId },
    });

    const departmentData = await model.department.findOne({
      raw: true,
      where: { id: allUserData.department_id },
    });

    const { name } = departmentData;
    allUserData["nrpId"] = allUserData["id"];
    delete allUserData.id; 

    res.status(200).json({
      status: 200,
      message: "Access Granted",
      data: { ...allUserData, departmentName: name },
      innerMessage: "",
    });
  } catch (err) {
    res.status(500).json({
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
        .json({ status: 200, message: "success", data: { token: userToken } });
    } else {
      res.status(400).json({
        status: 400,
        message: "The Username or Password You Entered is Incorrect",
        token: "",
      });
    }
  } catch (Err) {
    res.status(500).json({ status: 500, message: Err, token: "" });
  }
};
