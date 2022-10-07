import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import studentModel from "../db/models";

export const checkValidationUser = async (param) => {
  const { username, password } = param;
  const { count, rows } = await studentModel.student.findAndCountAll({
    where: { username: username },
  });
  if (
    count === 1 &&
    bcrypt.compareSync(password, rows[0]["password"]) === true
  ) {
    return true;
  }
  return false;
};

export const tokenization = async (param) => {
  const isValid = await checkValidationUser(param);
  if (isValid) {
    const { username } = param;

    let arrStr = [];
    const randomize = Math.random().toString(36).substring(2);
    let arrChar = username.split("");

    arrChar.forEach(() => {
      tempRes = "" + randomize;
      arrStr.push(tempRes);
    });

    let tempRes = "" + randomize;
    arrStr.push(tempRes);

    let decryptUsername = arrStr.join("");

    const tokenResult = jwt.sign(
      { decryptUsername },
      "this is test string for jwt",
      {
        expiresIn: "3600s",
      }
    );
    return tokenResult;
  } else {
    return null;
  }
};
