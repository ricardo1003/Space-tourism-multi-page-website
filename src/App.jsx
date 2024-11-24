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
import Navbar from "./components/Navbar";

function App() {
  const [currentBg, newBg] = useState(
    "/assets/home/background-home-desktop.jpg"
  );
  const changeBg = (input) => {
    newBg(input);
  };

  const [indicatorStatus, toggleIndicator] = useState([
    true,
    false,
    false,
    false,
  ]);

  return (
    <Router>
      <body
        className={`w-[100vw] h-[100vh] bg-center bg-cover text-white box-border flex flex-col max-h-[100vh] `}
        style={{ backgroundImage: `url(${currentBg})` }}
      >
        <Navbar
          changeBg={changeBg}
          indicatorStatus={indicatorStatus}
          toggleIndicator={toggleIndicator}
        ></Navbar>
        <Routes>
          <Route
            path="/HomePage"
            element={
              <HomePage
                indicatorStatus={indicatorStatus}
                toggleIndicator={toggleIndicator}
                changeBg={changeBg}
              />
            }
          />
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
          <Route
            path="/destination-titan"
            element={<DestinationTitan />}
          ></Route>
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
      </body>
    </Router>
  );
}

export default App;
