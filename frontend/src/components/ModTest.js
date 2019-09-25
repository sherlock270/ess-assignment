import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function ModTest(props) {
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  const submit = test => {
    axios.patch("http://localhost:8000/tests", test).then(res => {
      setCompleted(true);
    });
  };

  return (
    <div className="container">
      {completed ? (
        <Redirect to="/" />
      ) : (
        <div>
          <h1 onClick={() => setCompleted(true)}>Gonna mod a test here</h1>
          <h2>Also gonna be a delete button</h2>
        </div>
      )}
    </div>
  );
}
