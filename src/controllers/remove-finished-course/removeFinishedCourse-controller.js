import model from "../../db/models";

export const DeleteFinishedCourse = (req, res, next) => {
  model.finishedcourse
    .destroy({where: {}})
    .then(() => {
      res.status(200).json({
        status: 200,
        message: "Delete Finished Course Success!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: err,
      });
    });
};
