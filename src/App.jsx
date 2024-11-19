import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CrewCommander from "./pages/crew/crew-commander";
import CrewEngineer from "./pages/crew/crew-engineer";
import CrewPilot from "./pages/crew/crew-pilot";
import CrewSpecialist from "./pages/crew/crew-specialist";
import DestinationEuropa from "./pages/destination/destination-europa";
import DestinationMars from "./pages/destination/destination-mars";
import DestinationMoon from "./pages/destination/destination-moon";
import DestinationTitan from "./pages/destination/destination-titan";
import TechnologyCapsule from "./pages/tech/technology-capsule";
import TechnologySpaceport from "./pages/tech/technology-spaceport";
import TechnologyVehicle from "./pages/tech/technology-vehicle";

import HomePage from "./components/HomePage";
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/crew-commander" element={<CrewCommander />}></Route>
        <Route path="/crew-engineer" element={<CrewEngineer />}></Route>
        <Route path="/crew-pilot" element={<CrewPilot />}></Route>
        <Route path="/crew-specialist" element={<CrewSpecialist />}></Route>
        <Route
          path="/destination-europa"
          element={<DestinationEuropa />}
        ></Route>
        <Route path="/destination-mars" element={<DestinationMars />}></Route>
        <Route path="/destination-moon" element={<DestinationMoon />}></Route>
        <Route path="/destination-titan" element={<DestinationTitan />}></Route>
        <Route
          path="/technology-capsule"
          element={<TechnologyCapsule />}
        ></Route>
        <Route
          path="/technology-spaceport"
          element={<TechnologySpaceport />}
        ></Route>
        <Route
          path="/technology-vehicle"
          element={<TechnologyVehicle />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
