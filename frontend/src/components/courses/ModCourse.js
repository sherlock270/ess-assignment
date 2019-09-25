import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function ModCourse(props) {
  const course = props.location.state.course;
  const [name, setName] = useState(course.name);
  const [domain, setDomain] = useState(course.domain);
  const [description, setDescription] = useState(course.description);
  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);

  const submit = () => {
    axios
      .patch("http://localhost:8000/courses", course)
      .then(res => {
        setCompleted(true);
      })
      .catch(err => console.error(err));
  };

  const deleteCourse = () => {
    axios
      .delete("http://localhost:8000/courses", { params: { id: course.id } })
      .then(() => {
        setCompleted(true);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      {completed ? (
        <Redirect to="/" />
      ) : editing ? (
        <div>
          <form onSubmit={submit}>
            <label>
              Course name:
              <input
                name="name"
                type="text"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </label>
          </form>
        </div>
      ) : (
        <div>
          <h1>{course.name}</h1>
          <div className="domain">
            <h2>Domain</h2>
            <p>{course.domain}</p>
          </div>
          <div className="description">
            <h2>Description</h2>
            <p>{course.description}</p>
          </div>
          {course.Tests.length > 0 ? (
            <div className="tests">
              <h2>Tests:</h2>
              {course.Tests.map(test => {
                return <p key={test.id}>{test.name}</p>;
              })}
            </div>
          ) : null}
          <button onClick={deleteCourse}>Delete Course</button>
          <button onClick={() => setEditing(true)}>Edit Course</button>
          <button
            onClick={() => {
              props.history.push(`/add-test/${course.id}`);
            }}
          >
            Add a Test
          </button>
        </div>
      )}
    </div>
  );
}
