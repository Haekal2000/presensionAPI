import model from "../../db/models";

const getScheduleData = (lecturer_nik) => {
  const data = model.schedule
    .findAll({
      attributes: {
        exclude: ["schedule_id"],
      },
      where: { lecturer_nik: lecturer_nik },
      include: [
        {
          model: model.course,
          as: "course",
          attributes: ["name", "department_id"],
        },
      ],
      raw: false,
    })
    .then((param) => {
      return Promise.resolve(param);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
  return data;
};

export const GetLecturerSchedules = (req, res, next) => {
  let { lecturer_nik } = req.query;
  getScheduleData(lecturer_nik)
    .then((item) => {
      res.status(200).json({
        status: 200,
        message: "Success!",
        data: item,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ status: 500, message: err.toString() || "", data: [] });
    });
};
