import model from "../../db/models";

const getScheduleData = (lecturer_nik) => {
  const data = model.schedule
    .findAll({
      attributes: {
        exclude: ["schedule_id"]
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
      return param;
    })
    .catch(() => {
      return [];
    });
  return data;
};

export const GetLecturerSchedules = async (req, res, next) => {
  let { lecturer_nik } = req.query;
  try {
    const scheduleData = await getScheduleData(lecturer_nik);
    if (!scheduleData)
      res
        .status(400)
        .json({ status: 400, message: "data not found", data: [] });

    res.status(200).json({
      status: 200,
      message: "success!",
      data: scheduleData,
    });
  } catch (Err) {
    res.status(500).json({ status: 500, message: Err.toString() || ""});
  }
};
