import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function AddCourse(props) {
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  const submit = course => {
    axios.post("http://localhost:8000/courses", course).then(res => {
      setCompleted(true);
    });
  };

  return (
    <div className="container">
      {completed ? (
        <Redirect to="/" />
      ) : (
        <h1 onClick={() => setCompleted(true)}>Gonna add a course here</h1>
      )}
    </div>
  );
}
