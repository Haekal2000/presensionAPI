import bcrypt from "bcrypt";
import ShortUniqueId from "short-unique-id";
import studentModel from "../../db/models";
import { Respond } from "../../utils/respondFormat";

const avoidDuplicateID = async (reqBody) => {
  const allData = await studentModel.student.count({});
  if (allData > 0) {
    const validateName = await studentModel.student.findOne({
      where: { username: reqBody.username },
    });

    return validateName ? false : true;
  }
  return true;
};

const validation = async (requestData) => {
  const isDuplicate = await avoidDuplicateID(requestData);

  if (!isDuplicate) return false;

  const uid = new ShortUniqueId({ length: 10 });
  var salt = bcrypt.genSaltSync(10);
  const newObj = {
    id: uid(),
    username: requestData.username,
    password: bcrypt.hashSync(requestData.password, salt),
  };

  return newObj;
};

const postCreateStudent = async (req, res, next) => {
  try {
    const { body } = req;
    const validated = await validation(body);
    if (validated) {
      await studentModel.student.create(validated);
      res.status(200).json(Respond(200, "Insert User Success", null, ""));
    } else {
      res.status(400).json(Respond(400, "duplicated data", null, ""));
    }
  } catch (err) {
    res.status(500).json(Respond(500, "", null, ""));
  }
};

export default postCreateStudent;
