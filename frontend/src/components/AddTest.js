import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function AddTest(props) {
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  const submit = test => {
    axios.post("http://localhost:8000/tests", test).then(res => {
      setCompleted(true);
    });
  };

  return (
    <div className="container">
      {completed ? (
        <Redirect to="/" />
      ) : (
        <h1 onClick={() => setCompleted(true)}>Gonna add a test here</h1>
      )}
    </div>
  );
}
