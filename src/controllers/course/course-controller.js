import model, { sequelize } from "../../db/models";

export const getCourse = async (req, res, next) => {
  try {
    const { department_id, search } = req.query;

    const resp = await sequelize.query(
      `SELECT 
      course.id,
      course.name,
      course.credits,
      course.department_id,
      schedule.day AS day,
      schedule.hours AS hours,
      schedule.room AS room
  FROM
      courses AS course
          LEFT OUTER JOIN
      schedules AS schedule ON course.id = schedule.course_id
  WHERE
      (course.department_id = "${department_id}" ${
        search ? `AND course.name ="${search}"` : ""
      });`
    );

    res.status(200).json({
      status: 200,
      message: "Success",
      data: resp
        .flat()
        .filter((item, idx) => resp.flat().indexOf(item) === idx),
      innerMessage: "",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "",
      data: null,
      innerMessage: "",
    });
  }
};
