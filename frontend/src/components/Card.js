import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <p>Course: {props.course.name}</p>
      {props.course.domain && props.course.domain.length > 0 ? (
        <p>Domain: {props.course.domain}</p>
      ) : null}
    </div>
  );
}
