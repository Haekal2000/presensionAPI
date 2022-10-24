import model from "../../db/models";
import { tokenization } from "../../handler/login-handler";

export const getStudentData = async (nrpId) => {
  try {
    const allUserData = await model.student.findOne({
      raw: true,
      attributes: { exclude: ["password", "departmentId", "academicperiodId"] },
      where: { id: nrpId },
    });

    const departmentData = await model.department.findOne({
      raw: true,
      where: { id: allUserData.department_id },
    });

    const { name } = departmentData;
    allUserData["nrpId"] = allUserData["id"];
    delete allUserData.id;
    
    return { ...allUserData, departmentName: name };
  } catch (err) {
    return null;
  }
};

export const postLoginStudent = async (req, res, next) => {
  try {
    let { body } = req;
    const userToken = await tokenization(body);
    const _userData = await getStudentData(body.nrpId);
    if (userToken && _userData) {
      res
        .status(200)
        .json({
          status: 200,
          message: "success",
          data: { token: userToken, userData: _userData },
        });
    } else if (_userData) {
      res.status(400).json({
        status: 400,
        message: "data not exist",
        token: "",
      });
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
