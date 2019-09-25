const db = require("./models/index");

const Course = db["Course"];
const Test = db["Test"];

module.exports = {
  getCourses: async id => {
    let courses;
    if (id) {
      courses = await Course.findAll({ where: { id: id }, include: [Test] });
    } else {
      courses = await Course.findAll({ include: [Test] });
    }

    return courses;
  },
  createCourse: async course => {
    if (course.name) {
      const newCourse = await Course.create(course);
      return newCourse;
    } else {
      return { error: "Missing parameters" };
    }
  },
  updateCourse: async updates => {
    if (updates.id) {
      const updated = await Course.update(updates, {
        where: { id: updates.id }
      });
      return updated;
    } else {
      return { error: "ID required" };
    }
  },
  deleteCourse: async id => {
    if (id) {
      const deleted = await Course.destroy({ where: { id: id } });
      return deleted;
    } else {
      return { error: "ID required" };
    }
  },
  getTests: async id => {
    let tests;
    if (id) {
      tests = await Test.findAll({ where: { id: id } });
    } else {
      tests = await Test.findAll();
    }

    return tests;
  },
  createTest: async test => {
    if (test.name && test.course_id) {
      const newTest = await Test.create(test);
      return newTest;
    } else {
      return { error: "Missing parameters" };
    }
  },
  updateTest: async updates => {
    if (updates.id) {
      const updated = await Test.update(updates, {
        where: { id: updates.id }
      });
      return updated;
    } else {
      return { error: "ID required" };
    }
  },
  deleteTest: async id => {
    if (id) {
      const deleted = await Test.destroy({ where: { id: id } });
      return deleted;
    } else {
      return { error: "ID required" };
    }
  }
};
