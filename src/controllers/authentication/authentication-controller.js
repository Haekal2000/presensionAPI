import model from "../../db/models";
import { tokenization } from "../../handler/login-handler";

const getStudentData = async (nrpId) => {
  try {
    const studentData = await model.student.findOne({
      raw: true,
      attributes: { exclude: ["password", "departmentId", "academicperiodId"] },
      where: { id: nrpId },
    });

    const departmentData = await model.department.findOne({
      raw: true,
      where: { id: studentData.department_id },
    });

    const { name } = departmentData;
    studentData["nrpId"] = studentData["id"];
    delete allUserData.id;

    return { ...studentData, departmentName: name };
  } catch {
    return null;
  }
};

const getLectureData = async (_nik) => {
  try {
    const lectureData = await model.lecturer.findOne({
      raw: true,
      attributes: {
        exclude: ["id", "departmentId", "roleId"],
      },
      where: { nik: _nik },
    });

    return lectureData;
  } catch {
    return null;
  }
};

export const postLoginStudent = async (req, res, next) => {
  try {
    let { body } = req;
    const userToken = await tokenization(body);
    const _userData = await getStudentData(body.nrpId);
    if (userToken && _userData) {
      res.status(200).json({
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

export const postLoginLecture = async (req, res, next) => {
  try {
    let { body } = req;
    const userToken = await tokenization(body);
    const lectureData = await getLectureData(body.nik);

    if (userToken && lectureData) {
      res.status(200).json({
        status: 200,
        message: "success",
        data: { token: userToken, userData: lectureData },
      });
    } else if (lectureData) {
      res.status(400).json({
        status: 400,
        message: "data not exist",
        token: "",
      });
    }
  } catch (Err) {
    res.status(500).json({ status: 500, message: Err, token: "" });
  }
};
