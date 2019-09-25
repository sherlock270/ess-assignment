import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Courses from "./components/Courses";
import AddCourse from "./components/courses/AddCourse";
import ModCourse from "./components/courses/ModCourse";
import AddTest from "./components/tests/AddTest";
import ModTest from "./components/tests/ModTest";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Route exact path="/" component={Courses} />
      <Route path="/add-course" component={AddCourse} />
      <Route path="/mod-course/:id" component={ModCourse} />
      {/* The id in /add-test is the course id */}
      <Route path="/add-test/:id" component={AddTest} />
      <Route path="/mod-test/:id" component={ModTest} />
    </div>
  );
}

export default App;
