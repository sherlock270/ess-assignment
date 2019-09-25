"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Courses",
      [
        {
          name: "Courses part 1",
          domain: "misc",
          description: "It's a course of course"
        },
        {
          name: "Courses part 2",
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
