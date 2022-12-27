'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class finishedcourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { student, lecturer, course, schedule } = models;
      finishedcourse.belongsTo(student, {
        foreignKey: "student_id",
        as: "student"
      });
      finishedcourse.belongsTo(lecturer, {
        foreignKey: "lecturer_nik",
        as: "lecturer"
      });
      finishedcourse.belongsTo(course, {
        foreignKey: "course_id",
        as: "course"
      })
      finishedcourse.belongsTo(schedule, {
        foreignKey: "schedule_id",
        as: "schedule"
      })
    }
  }
  finishedcourse.init({
    student_id: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: true,
      references: {
        model: "students",
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
    acceptDate: DataTypes.DATE,
    isPresent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'finishedcourse',
  });
  return finishedcourse;
};