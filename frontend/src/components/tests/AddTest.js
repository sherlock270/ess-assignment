import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function AddTest(props) {
  const id = props.match.params.id;
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);
  const [num, setNum] = useState(0);
  const [duration, setDuration] = useState("");

  const submit = e => {
    e.preventDefault();

    const test = {
      name: name,
      course_id: id,
      num_of_questions: num,
      duration: duration
    };
    axios
      .post("http://localhost:8000/tests", test)
      .then(res => {
        console.log(res.data);
        setCompleted(true);
        console.log("completed", completed);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      {completed ? (
        <Redirect to="/" />
      ) : (
        <div>
          <h1 onClick={() => setCompleted(true)}>Add a test</h1>
          <form onSubmit={submit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <label>
              Number of Questions
              <input
                type="number"
                name="num"
                value={num}
                onChange={e => setNum(e.target.value)}
              />
            </label>
            <label>
              Duration
              <input
                type="text"
                name="duration"
                value={duration}
                onChange={e => setDuration(e.target.value)}
              />
            </label>
            <button type="submit" onClick={submit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
