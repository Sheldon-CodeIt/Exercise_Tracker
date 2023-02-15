import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExerciseState from "./context/exerciseState";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ExerciseList from "./components/ExerciseList";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

export default function App() {
  return (
    <ExerciseState>
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/exercises" element={<ExerciseList />} />
            <Route path="/create" element={<CreateExercise/>} />
            <Route path="/user" element={<CreateUser />} />
          </Routes>
        </div>
      </Router>
    </ExerciseState>
  );
}

{
  /*     <Route path="/" element={<ExercisesList/>} />
        <Route path="/edit/:id" element={<EditExercise/>} />
        <Route path="/create" element={<CreateExercise/>} />
        <Route path="/user" element={<CreateUser/>} /> */
}
