import model from "../../db/models";
import { tokenization } from "../../handler/login-handler";

const getStudentData = (nrpId) => {
  const response = model.student.findOne({
    raw: true,
    attributes: {
      exclude: ["password", "departmentId", "academicperiodId", "student_id"],
    },
    where: { id: nrpId },
  }).then((studentData) => {
    const departmentData = model.department.findOne({
      raw: true,
      where: { id: studentData.department_id },
    }).catch((errDepartment) => {
      return Promise.reject(errDepartment);
    });
    const { name } = departmentData;
    studentData["nrpId"] = studentData["id"];
    delete studentData.id;

    const result = { ...studentData, departmentName: name };
    return Promise.resolve(result);
  }).catch((errStudent) => {
    return Promise.reject(errStudent);
  });
  return response;
};

export const postLoginStudent = (req, res, next) => {
  let { body } = req;
  tokenization(body, true).then((token) => {
    getStudentData(body.nrpId).then((data) => {
      res.status(200).json({
        status: 200,
        message: "success",
        data: { token: token, userData: data},
      });
    }).catch((err) => {
      res.status(500).json({
        status: 500,
        message: err,
        token: "",
      });
    });
  }).catch(() => {
    res.status(400).json({
      status: 400,
      message: "The Student nrpid or Password You Entered is Incorrect!",
      token: "",
    });
  });
};
