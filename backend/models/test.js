"use strict";
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    "Test",
    {
      name: DataTypes.STRING,
      course_id: DataTypes.INTEGER,
      num_of_questions: DataTypes.INTEGER,
      duration: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Test.associate = function(models) {
    Test.belongsTo(models.Course, {
      targetKey: "id",
      foreignKey: "course_id"
    });
  };
  return Test;
};
