import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import People from "./componets/People";
import Planets from "./componets/Planet";
import Main from "./componets/Main";

function App() {
  return (
    <div>
      <Main />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
