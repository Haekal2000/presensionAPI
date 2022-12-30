import model from "../../db/models";

export const PutClosingCourse = (req, res, next) => {
  const { query } = req;
  model.finishedcourse
    .update(
      {
        isDone: true,
      },
      {
        where: { course_id: query.course_id },
      }
    )
    .then(() => {
      res
        .status(200)
        .json({ status: 200, message: "Finished Course already updated!" });
    })
    .then((err) => {
      res.status(500).json({ status: 500, message: err });
    });
};
