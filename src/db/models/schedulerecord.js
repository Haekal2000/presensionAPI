'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class schedulerecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { lecturer, course, schedule } = models;
      schedulerecord.belongsTo(lecturer, {
        foreignKey: "lecturer_nik",
        as: "lecturer",
      });
      schedulerecord.belongsTo(course, {
        foreignKey: "course_id",
        as: "course",
      });
      schedulerecord.belongsTo(schedule, {
        foreignKey: "schedule_id",
        as: "schedule",
      });
    }
  }
  schedulerecord.init({
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
    isComplete: {type: DataTypes.BOOLEAN, defaultValue: false}
  }, {
    sequelize,
    modelName: 'schedulerecord',
  });
  return schedulerecord;
};