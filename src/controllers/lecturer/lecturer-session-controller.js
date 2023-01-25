import Model from "../../db/models";

export const GetLecturerSession = (req, res, next) => {
  const { lecturer_nik } = req.query;
  Model.schedule
    .findAll({
      attributes: {
        exclude: ["schedule_id", "password", "createdAt", "updatedAt"],
      },
      where: {
        lecturer_nik: lecturer_nik,
      },
      include: [
        {
          model: Model.course,
          as: "course",
          attributes: ["name"],
        },
        {
          model: Model.studentrecord,
          as: "studentrecord",
          attributes: ["id", "isPresent"],
        },
        {
          model: Model.schedulerecord,
          as: "schedulerecord",
          attributes: ["id", "isComplete", "createdAt"],
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
      res.status(500).json({
        status: 500,
        message: err.toString() || "",
      });
    });
};
