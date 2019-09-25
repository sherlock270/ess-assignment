import React from "react";
import axios from "axios";
import Card from "./Card";

class Courses extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      selectedCourse: 0
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/courses")
      .then(courses => {
        console.log("courses", courses.data.courses);
        this.setState({ courses: courses.data.courses });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="courses-container">
        <h1>Current Courses</h1>
        <h4>Select a course to view associated tests</h4>
        {this.state.courses.length > 0
          ? this.state.courses.map(course => {
              return <Card course={course} key={course.id} />;
            })
          : null}
      </div>
    );
  }
}

export default Courses;
