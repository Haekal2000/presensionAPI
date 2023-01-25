import model from "../../db/models";

export const GetStudentSchedules = (req, res, next) => {
  const { department_id, academic_period_id, student_id } = req.query;
  model.schedule
    .findAll({
      attributes: {
        exclude: [
          "password",
          "schedule_id"
        ],
      },
      where: { academic_period_id: academic_period_id },
      include: [
        {
          model: model.course,
          as: "course",
          attributes: ["name", "department_id"],
          where: { department_id: department_id },
        },
      ],
      raw: false,
    })
    .then((item) => {
      res.status(200).json({
        status: 200,
        message: "success!",
        data: item,
      });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err.toString() || "" });
    });
};
