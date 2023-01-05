import Model from "../../db/models";

export const GetStudentHistory = (req, res, next) => {
  const { department_id, student_id } = req.query;
  Model.studentrecord
    .findAll({
      attributes: {
        exclude: [
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
          include: [
            {
              model: Model.schedulerecord,
              as: "schedulerecord",
              attributes: ["isComplete"],
              where: { isComplete: true },
            },
          ],
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
      res.status(500).json({
        status: 500,
        message: err.toString() || "",
        data: {},
      });
    });
};
