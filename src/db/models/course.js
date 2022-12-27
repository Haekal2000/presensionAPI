"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { schedule, finishedcourse } = models;
      course.hasMany(schedule, {as: "schedule"});
      course.hasOne(finishedcourse, {as: "finishedcourse"});
    }
  }
  course.init(
    {
      name: DataTypes.STRING,
      credits: DataTypes.STRING,
      department_id:{
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
      modelName: "course",
    }
  );
  return course;
};
