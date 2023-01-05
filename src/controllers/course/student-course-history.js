import Model from "../../db/models";

export const GetStudentHistory = (req, res, next) => {
  const { department_id, student_id } = req.query;
  Model.studentrecord
    .findAll({
      attributes: {
        exclude: [
          "studentrecordId",
          "id",
          "schedule_id",
          "lecturer_nik",
          "createdAt",
          "updatedAt",
        ],
      },
      where: { student_id: student_id },
      include: [
        {
          model: Model.course,
          as: "course",
          attributes: ["name", "department_id"],
          where: { department_id: department_id },
        },
      ],
    })
    .then((item) => {
      res.status(200).json({
        status: 200,
        message: "Get Student Course History Success",
        data: item,
      });
    })
    .catch((err) => {
      console.log("err: ", err);
      res.status(500).json({
        status: 500,
        message: err,
        data: {},
      });
    });
};
