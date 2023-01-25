"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class studentrecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { student, lecturer, course, schedule } = models;
      studentrecord.belongsTo(student, {
        foreignKey: "student_id",
        as: "student",
      });
      studentrecord.belongsTo(course, {
        foreignKey: "course_id",
        as: "course",
      });
      studentrecord.belongsTo(lecturer, {
        foreignKey: "lecturer_nik",
        as: "lecturer"
      });
      studentrecord.belongsTo(schedule, {
        foreignKey: "schedule_id",
        as: "schedule"
      });
    }
  }
  studentrecord.init(
    {
      student_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "students",
          key: "id",
        },
      },
      course_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "courses",
          key: "id",
        },
      },
      schedule_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "schedules",
          key: "id",
        },
      },
      lecturer_nik: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "lecturers",
          key: "nik",
        },
      },
      acceptDate: DataTypes.DATE,
      isPresent: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "studentrecord",
    }
  );
  return studentrecord;
};
