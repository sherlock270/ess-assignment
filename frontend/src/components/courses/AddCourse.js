import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function AddCourse(props) {
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const submit = e => {
    e.preventDefault();

    const course = { name: name, domain: domain, description: description };
    axios
      .post("http://localhost:8000/courses", course)
      .then(res => {
        console.log(res.data);
        setCompleted(true);
        console.log("completed", completed);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h1 onClick={() => setCompleted(true)}>Add a Course</h1>
      {completed ? (
        <Redirect to="/" />
      ) : (
        <form onSubmit={submit}>
          <label>
            name
            <input
              type="text"
              name="name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            domain
            <input
              type="text"
              name="domain"
              onChange={e => setDomain(e.target.value)}
              value={domain}
            />
          </label>
          <label>
            description
            <input
              type="text"
              name="description"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
