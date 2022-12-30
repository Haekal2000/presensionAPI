import model from "../../db/models";

const getScheduleData = (nik) => {
  const data = model.schedule
    .findAll({
      attributes: {
        exclude: ["academicperiodId", "courseId", "lecturerId"],
      },
      where: { lecturer_nik: nik },
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

export const GetLectureSchedules = async (req, res, next) => {
  let { nik } = req.query;
  try {
    const scheduleData = await getScheduleData(nik);
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
    res.status(500).json({ status: 500, message: Err});
  }
};
