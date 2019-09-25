import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div className="sidebar-container">
      <h1>Welcome</h1>
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/add-course">Add New Course</Link>
    </div>
  );
}
