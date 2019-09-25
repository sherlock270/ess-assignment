import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Courses from "./components/Courses";
import AddCourse from "./components/AddCourse";
import ModCourse from "./components/ModCourse";
import AddTest from "./components/AddTest";
import ModTest from "./components/ModTest";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Route exact path="/" component={Courses} />
      <Route path="/add-course" component={AddCourse} />
      <Route path="/mod-course" component={ModCourse} />
      <Route path="/add-test" component={AddTest} />
      <Route path="/mod-test" component={ModTest} />
    </div>
  );
}

export default App;
