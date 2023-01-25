import model from "../../db/models";

export const GetStudentData = (req, res, next) => {
  const { nrpId } = req.query;

  model.student
    .findOne({
      raw: true,
      attributes: {
        exclude: ["password", "departmentId", "academicperiodId", "student_id"],
      },
      where: { id: nrpId },
    })
    .then((studentData) => {
      const departmentData = model.department
        .findOne({
          raw: true,
          where: { id: studentData.department_id },
        })
        .catch((errDepartment) => {
          res.status(500).json({
            status: 500,
            message: errDepartment.toString() || "",
            data: {},
          });
        });
      const { name } = departmentData;
      studentData["nrpId"] = studentData["id"];
      delete studentData.id;

      const result = { ...studentData, departmentName: name };
      res.status(200).json({
        status: 200,
        message: "Get Data Success!",
        data: result,
      });
    })
    .catch((errStudent) => {
      res.status(500).json({
        status: 500,
        message: errStudent.toString() || "",
        data: {},
      });
    });
};
