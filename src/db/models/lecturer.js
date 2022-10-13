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
      const { role, department } = models;
      lecturer.belongsTo(role, {
        foreignKey: "role_id",
        as: "lecturer",
      });
      lecturer.belongsTo(department, {
        foreignKey: "department_id",
        as: "role",
      });
    }
  }
  lecturer.init(
    {
      nidn: DataTypes.STRING,
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
      role_id: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "roles",
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
