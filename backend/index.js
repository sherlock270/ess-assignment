const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const helpers = require("./helpers");

// require("./database/connection");

server.use(express.json());
server.use(cors());
server.use(helmet());

const errorHandler = err => console.error(err);

/***************************************
 *          Course routes
 ***************************************/
//return course indicated by id, or all courses if no id
server.get("/courses/", (req, res) => {
  helpers
    .getCourses(req.body.id)
    .then(courses => {
      res.status(200).json({ courses: courses });
    })
    .catch(errorHandler);
});

//create new course
server.post("/courses", (req, res) => {
  const course = req.body;
  helpers
    .createCourse(course)
    .then(response => {
      if (response.error) {
        res.status(400).json({ error: response.error });
      } else {
        res.status(201).json({ message: "course created successfully" });
      }
    })
    .catch(errorHandler);
});

server.patch("/courses", (req, res) => {
  // Front end sends an object containing requested updates
  const updates = req.body;
  helpers
    .updateCourse(updates)
    .then(response => {
      if (response.error) {
        res.status(400).json({ error: response.error });
      } else {
        res.status(200).json({ message: "course updated successfully" });
      }
    })
    .catch(errorHandler);
});

server.delete("/courses", (req, res) => {
  // ID of course to delete is sent via params from the frontend
  helpers
    .deleteCourse(req.query.id)
    .then(response => {
      if (response.error) {
        res.status(400).json({ error: response.error });
      } else {
        res.status(200).json({ message: "course deleted successfully" });
      }
    })
    .catch(errorHandler);
});

/***************************************
 *          Test routes
 ***************************************/
//return test indicated by id, or all tests if no id
server.get("/tests/", (req, res) => {
  helpers
    .getTests(req.body.id)
    .then(tests => {
      res.status(200).json({ tests: tests });
    })
    .catch(errorHandler);
});

//create new test. name and course_id required
server.post("/tests", (req, res) => {
  const test = req.body;
  helpers
    .createTest(test)
    .then(response => {
      if (response.error) {
        res.status(400).json({ error: response.error });
      } else {
        res.status(201).json({ message: "test created successfully" });
      }
    })
    .catch(errorHandler);
});

// Front end sends an object containing requested updates
server.patch("/tests", (req, res) => {
  const updates = req.body;
  helpers
    .updateTest(updates)
    .then(response => {
      if (response.error) {
        res.status(400).json({ error: response.error });
      } else {
        res.status(200).json({ message: "est updated successfully" });
      }
    })
    .catch(errorHandler);
});

// ID of test to delete is sent via params from the frontend
server.delete("/tests", (req, res) => {
  helpers
    .deleteTest(req.query.id)
    .then(response => {
      if (response.error) {
        res.status(400).json({ error: response.error });
      } else {
        res.status(200).json({ message: "test deleted successfully" });
      }
    })
    .catch(errorHandler);
});

// Start server
server.listen(8000, () => {
  console.log("=== listening on port 8000 ===");
});
