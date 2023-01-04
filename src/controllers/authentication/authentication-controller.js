import model from "../../db/models";
import { tokenization } from "../../handler/login-handler";

const getStudentData = async (nrpId) => {
  try {
    const studentData = await model.student.findOne({
      raw: true,
      attributes: {
        exclude: ["password", "departmentId", "academicperiodId", "student_id"],
      },
      where: { id: nrpId },
    });

    const departmentData = await model.department.findOne({
      raw: true,
      where: { id: studentData.department_id },
    });

    const { name } = departmentData;
    studentData["nrpId"] = studentData["id"];
    delete studentData.id;

    const fixedData = { ...studentData, departmentName: name };
    return fixedData;
  } catch {
    return null;
  }
};

const getLectureData = async (_nik) => {
  const lectureData = await model.lecturer
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

  return lectureData;
};

export const postLoginStudent = async (req, res, next) => {
  try {
    let { body } = req;
    const userToken = await tokenization(body, true);
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
        message: "The Student nrpid or Password You Entered is Incorrect",
        token: "",
      });
    }
  } catch (Err) {
    res.status(500).json({ status: 500, message: Err, token: "" });
  }
};

export const postLoginLecture = (req, res, next) => {
  let { body } = req;

  tokenization(body, false)
    .then((_token) => {
      getLectureData(body.nik)
        .then((item) => {
          res.status(200).json({
            status: 200,
            message: "success",
            data: { token: _token, userData: item },
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
