import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <h1>Course: {props.course.name}</h1>
    </div>
  );
}
