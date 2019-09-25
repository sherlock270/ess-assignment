"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tests",
      [
        {
          name: "Test1",
          num_of_questions: 55,
          duration: "4 hours",
          course_id: 1
        },
        {
          name: "Test2",
          num_of_questions: 55,
          duration: "4 hours",
          course_id: 2
        },
        {
          name: "Test3",
          num_of_questions: 55,
          duration: "4 hours",
          course_id: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tests", null, {});
  }
};
