import Model from "../../db/models";

export const GetLecturerSession = (req, res, next) => {
  const { course_id, lecturer_nik } = req.query;
  Model.schedule
    .findAll({
    //   attributes: { exclude: ["finishedcourseId"] },
      where: {
        course_id: course_id,
        lecturer_nik: lecturer_nik,
        isPresent: true,
        isDone: true,
      },
      include: [
        {
          model: Model.course,
          as: "course",
          attributes: ["name", "department_id"],
        },
      ],
    })
    .then((item) => {
      res.status(200).json({
        status: 200,
        message: "get lecture session success!",
        data: item,
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: 200,
        message: err,
      });
    });
};
