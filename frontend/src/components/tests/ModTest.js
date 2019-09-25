import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function ModTest(props) {
  const test = props.location.state.test;
  const [name, setName] = useState(test.name);
  const [num, setNum] = useState(test.num_of_questions);
  const [duration, setDuration] = useState(test.duration);
  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);

  const submit = e => {
    e.preventDefault();

    const newTest = { id: test.id };
    // Only send updated properties to keep bandwidth usage to a minimum
    if (test.name !== name) newTest.name = name;
    if (test.num_of_questions !== num) newTest.num_of_questions = num;
    if (test.duration !== duration) newTest.duration = duration;

    // Don't send if no values have been changed
    if (Object.keys(newTest).length > 1) {
      axios
        .patch("http://localhost:8000/tests", newTest)
        .then(res => {
          setCompleted(true);
        })
        .catch(err => console.error(err));
    } else {
      setEditing(false);
    }
  };

  const deleteTest = () => {
    console.log("deleting test", test.id);
    axios
      .delete("http://localhost:8000/tests", { params: { id: test.id } })
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
          <h1>Editing Test: {test.name}</h1>
          <form onSubmit={submit}>
            <label>
              Test name:
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
              Number of Questions:
              <input
                name="num"
                type="number"
                value={num ? num : 0}
                onChange={e => {
                  setNum(e.target.value);
                }}
              />
            </label>
            <label>
              Test Duration:
              <input
                name="duration"
                type="text"
                value={duration}
                onChange={e => {
                  setDuration(e.target.value);
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
          <h1>{test.name}</h1>
          <div className="domain">
            <h2>Number of Questions: {num}</h2>
          </div>
          <div className="description">
            <h2>Test Duration: {duration}</h2>
          </div>

          <button onClick={deleteTest}>Delete Test</button>
          <button onClick={() => setEditing(true)}>Edit Test</button>

          <button onClick={() => setCompleted(true)}>Done</button>
        </div>
      )}
    </div>
  );
}
