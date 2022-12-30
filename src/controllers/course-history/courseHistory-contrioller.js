import Model from "../../db/models";

export const GetCourseHistory = (req, res, next) => {
  Model.finishedcourse.findAll({});
};
