import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import studentModel from "../db/models";
import { studentAttributes } from "../utils/studentAttributes";

const checkValidationStudent = async (param) => {
  const { nrpId, password } = param;
  const { count, rows } = await studentModel.student.findAndCountAll({
    raw: true,
    attributes: studentAttributes,
    where: { id: nrpId },
  });
  if (
    count === 1 &&
    bcrypt.compareSync(password, rows[0]["password"]) === true
  ) {
    return true;
  }
  return false;
};

export const checkValidationLecture = async (param) => {
  const { nik: nikLecture } = param;
  const { count } = await studentModel.lecturer.findAndCountAll({
    raw: true,
    attributes: {
      exclude: ["id", "departmentId", "roleId"],
    },
    where: { nik: nikLecture },
  });

  if (count === 1) {
    return true;
  }
  return false;
};

export const tokenization = async (param, isStudent) => {
  let isValid = false;

  if (isStudent) {
    isValid = await checkValidationStudent(param);
  } else {
    isValid = await checkValidationLecture(param);
  }

  if (isValid) {
    const { nrpId, nik } = param;

    let arrStr = [];
    const randomize = Math.random().toString(36).substring(2);
    let arrChar = "";

    if (isStudent) {
      arrChar = nrpId.split("");
    } else {
      arrChar = nik.split("");
    }

    arrChar.forEach(() => {
      tempRes = "" + randomize;
      arrStr.push(tempRes);
    });

    let tempRes = "" + randomize;
    arrStr.push(tempRes);

    let decryptUsername = arrStr.join("");

    const tokenResult = jwt.sign(
      { decryptUsername },
      "this is test string for jwt"
    );
    return tokenResult;
  } else {
    return null;
  }
};
