import bcrypt from "bcrypt";
import Joi from "joi";
import { Op } from "sequelize";
import ShortUniqueId from "short-unique-id";
import studentModel from "../../db/models";
import { Respond } from "../../utils/respondFormat";
import { studentAttributes } from "../../utils/studentAttributes";

const avoidDuplicateUser = async (reqBody) => {
  const allData = await studentModel.student.count({});
  if (allData > 0) {
    const validateName = await studentModel.student.findOne({
      raw: true,
      attributes: studentAttributes,
      where: {
        id: { [Op.like]: reqBody.nrpId },
        name: { [Op.like]: reqBody.name },
      },
    });
    return validateName ? false : true;
  }
  return true;
};

const validation = async (requestData) => {
  const isNotDuplicate = await avoidDuplicateUser(requestData);

  if (!isNotDuplicate) return null;

  const newObj = {
    id: requestData.nrpId,
    name: requestData.name,
    password: bcrypt.hashSync(requestData.password, bcrypt.genSaltSync(10)),
    department_id: requestData.department_id,
    image: "https://i.ibb.co/QNXQM3F/user.png",
  };

  const schema = Joi.object({
    id: Joi.string().min(7).max(7).required().messages({
      "string.min": "length must be at least 7 characters long",
      "string.max": "length must be at least 7 characters long",
    }),
    name: Joi.string().min(3).max(30).required(),
    password: Joi.string().required(),
    department_id: Joi.string().required(),
    image: Joi.string(),
  });

  try {
    const value = await schema.validateAsync(newObj);
    return value;
  } catch (err) {
    return err.details;
  }
};

const postCreateStudent = async (req, res, next) => {
  let validated;
  try {
    const { body } = req;
    validated = await validation(body);
    if (validated) {
      await studentModel.student.create(validated);
      res.status(200).json(Respond(200, "Insert User Success", null, ""));
    } else {
      res
        .status(400)
        .json(Respond(400, "duplicated data or wrong input", null, ""));
    }
  } catch (err) {
    res
      .status(500)
      .json(
        Respond(
          500,
          validated[0]?.message || err.errors[0].message || null,
          null,
          ""
        )
      );
  }
};

export default postCreateStudent;
