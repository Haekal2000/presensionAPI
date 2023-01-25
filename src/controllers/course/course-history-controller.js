import Model from "../../db/models";

export const GetCourseHistory = (req, res, next) => {
  const { lecturer_nik, course_id, department_id } = req.query;
  Model.schedule
    .findOne({
      attributes: { exclude: ["schedule_id", "password"] },
      where: { lecturer_nik: lecturer_nik, course_id: course_id },
      include: [
        {
          model: Model.course,
          as: "course",
          attributes: ["name", "department_id"],
          where: { department_id: department_id },
        },
        {
          model: Model.studentrecord,
          as: "studentrecord",
          attributes: ["id", "isPresent"],
          include: [
            {
              model: Model.student,
              as: "student",
              attributes: ["id", "name"]
            }
          ]
        },
        {
          model: Model.schedulerecord,
          as: "schedulerecord",
          where: { isComplete: true },
          attributes: ["isComplete"],
        },
      ],
    })
    .then((item) => {
      res.status(200).json({
        status: 200,
        message: "Get Course History Success",
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
