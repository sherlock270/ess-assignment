import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ModCourse(props) {
  const course = props.location.state.course;
  const [name, setName] = useState(course.name);
  const [domain, setDomain] = useState(course.domain);
  const [description, setDescription] = useState(course.description);
  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);

  const submit = e => {
    e.preventDefault();

    const newCourse = { id: course.id };
    // Only send updated properties to keep bandwidth usage to a minimum
    if (course.name !== name) newCourse.name = name;
    if (course.domain !== domain) newCourse.domain = domain;
    if (course.description !== description) newCourse.description = description;

    // Don't send if no values have been changed
    if (Object.keys(newCourse).length > 1) {
      console.log("new: ", newCourse);
      axios
        .patch("http://localhost:8000/courses", newCourse)
        .then(res => {
          setCompleted(true);
        })
        .catch(err => console.error(err));
    } else {
      setEditing(false);
    }
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
        <div className="editing">
          <h1>Editing Course: {course.name}</h1>
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
            <label>
              Course domain:
              <input
                name="domain"
                type="text"
                value={domain ? domain : ""}
                onChange={e => {
                  setDomain(e.target.value);
                }}
              />
            </label>
            <label>
              Course description:
              <input
                name="description"
                type="text"
                value={description}
                onChange={e => {
                  setDescription(e.target.value);
                }}
              />
            </label>
            <button type="submit" onClick={submit}>
              Done
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h1>{course.name}</h1>
          <h3>Select a test to see more details</h3>

          <div className="info">
            <h4>Domain</h4>
            <p>{course.domain}</p>
          </div>
          <div className="info">
            <h4>Description</h4>
            <p>{course.description}</p>
          </div>
          <div className="info">
            {course.Tests.length > 0 ? (
              <div className="tests">
                <h4>Tests:</h4>
                {course.Tests.map(test => {
                  return (
                    <Link
                      key={test.id}
                      to={{
                        pathname: `/mod-test/${test.id}`,
                        state: { test: test }
                      }}
                    >
                      <p>{test.name}</p>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
          <button onClick={deleteCourse}>Delete Course</button>
          <button onClick={() => setEditing(true)}>Edit Course</button>
          <button
            onClick={() => {
              props.history.push(`/add-test/${course.id}`);
            }}
          >
            Add a Test
          </button>
          <button onClick={() => setCompleted(true)}>Done</button>
        </div>
      )}
    </div>
  );
}
