"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { department, academicperiod, studentrecord } = models;
      student.belongsTo(department, {
        foreignKey: "department_id",
        as: "department",
      });
      student.belongsTo(academicperiod, {
        foreignKey: "academic_period_id",
        as: "academicPeriod",
      });
      student.hasMany(studentrecord, {as: "studentrecord", foreignKey: "student_id"})
    }
  }
  student.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      department_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "departments",
          key: "id",
        },
      },
      image: DataTypes.STRING,
      academic_period_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "academicperiods",
          key: "id",
        },
      },
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "student",
    }
  );
  return student;
};
