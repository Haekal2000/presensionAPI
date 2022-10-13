"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { course, lecturer, academicperiod } = models;

      schedule.belongsTo(course, {
        foreignKey: "course_id",
        as: "course",
      });
      schedule.belongsTo(lecturer, {
        foreignKey: "lecturer_nik",
        as: "lecturer",
      });
      schedule.belongsTo(academicperiod, {
        foreignKey: "academic_period_id",
        as: "academicperiod",
      });
    }
  }
  schedule.init(
    {
      course_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "courses",
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
      academic_period_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "academicperiods",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "schedule",
    }
  );
  return schedule;
};
