import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import InfoButtons from "./components/InfoButtons";
import InfoText from "./components/InfoText";
import PlanetStats from "./components/PlanetStats";
function App() {
  const [activeImg, setActiveImg] = useState(1);
  return (
    <div className="App">
      <Navbar />
      <div className="planetAndInfoFlex">
        <InfoButtons activeImg={activeImg} setActiveImg={setActiveImg} />
        <Routes>
          <Route path="/" element={<Navigate to="/Mercury" />} />
          <Route path="/:name" element={<Planets activeImg={activeImg} />} />
        </Routes>
        <InfoText active={activeImg} setActiveImg={setActiveImg} />
      </div>
      <PlanetStats />
    </div>
  );
}

export default App;
