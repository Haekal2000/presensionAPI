"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { department, schedule, schedulerecord } = models;
      lecturer.belongsTo(department, {
        foreignKey: "department_id",
        as: "department",
      });
      lecturer.hasOne(schedule, {as: "schedule", foreignKey: "schedule_id",});
      lecturer.hasOne(schedulerecord, {as: "schedulerecord", foreignKey: "lecturer_nik"})
    }
  }
  lecturer.init(
    {
      nik: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.INTEGER,
      department_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "departments",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "lecturer",
    }
  );
  return lecturer;
};
