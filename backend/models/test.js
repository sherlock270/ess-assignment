'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    name: DataTypes.STRING,
    course_id: DataTypes.INTEGER,
    num_of_questions: DataTypes.INTEGER,
    duration: DataTypes.STRING
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};