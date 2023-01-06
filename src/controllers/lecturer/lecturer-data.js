import model from "../../db/models";

export const GetLectureData = (req, res, next) => {
  const { nik: _nik } = req.query;
  model.lecturer
    .findOne({
      raw: true,
      attributes: {
        exclude: ["id", "departmentId", "lecturer_nik"],
      },
      where: { nik: _nik },
    })
    .then((item) => {
      res.status(200).json({
        status: 200,
        message: "Get Lecture Data Success!",
        data: item,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: err.toString() || "",
        token: "",
      });
    });
};
