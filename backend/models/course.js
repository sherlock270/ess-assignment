"use strict";
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      name: DataTypes.STRING,
      domain: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Course.associate = function(models) {
    Course.hasMany(models.Test, {
      foreignKey: "course_id"
    });
  };
  return Course;
};
