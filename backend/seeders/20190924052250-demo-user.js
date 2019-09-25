"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Courses",
      [
        {
          name: "Courses 101",
          domain: "misc",
          description: "It's a course of course"
        },
        {
          name: "Courses 102",
          description: "It's a matter of course"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Courses", null, {});
  }
};
