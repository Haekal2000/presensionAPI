"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { student, lecturer } = models;
      department.hasMany(student, { as: "student", foreignKey: "student_id" });
      department.hasMany(lecturer, { as: "lecturer", foreignKey: "lecturer_nik" });
    }
  }
  department.init(
    {
      name: DataTypes.STRING,
      faculty_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "department",
    }
  );
  return department;
};
