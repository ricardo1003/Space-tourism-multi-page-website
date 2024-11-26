import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import "./App.css";

import data from "./data.json";

import CrewCommander from "./pages/crew/crew-commander";
import CrewEngineer from "./pages/crew/crew-engineer";
import CrewPilot from "./pages/crew/crew-pilot";
import CrewSpecialist from "./pages/crew/crew-specialist";

import Destination from "./pages/destination/Destination";

import TechnologyCapsule from "./pages/tech/technology-capsule";
import TechnologySpaceport from "./pages/tech/technology-spaceport";
import TechnologyVehicle from "./pages/tech/technology-vehicle";

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  const [currentBg, newBg] = useState(
    "/assets/home/background-home-desktop.jpg"
  );
  const location = useLocation();

  const changeBg = (input) => {
    console.log(input);
  };
  const [indicatorStatus, toggleIndicator] = useState([
    true,
    false,
    false,
    false,
  ]);
  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/destination")) {
      newBg("/assets/destination/background-destination-desktop.jpg");
      const indicatorArray = indicatorStatus;
      indicatorArray.map((indicator, i) => {
        indicatorArray[i] = false;
      });
      indicatorArray[1] = true;
      toggleIndicator(indicatorArray);
    } else if (path.startsWith("/crew")) {
      newBg("/assets/crew/background-crew-desktop.jpg");
      const indicatorArray = indicatorStatus;
      indicatorArray.map((indicator, i) => {
        indicatorArray[i] = false;
      });
      indicatorArray[2] = true;
    } else if (path.startsWith("/technology")) {
      newBg("/assets/technology/background-technology-desktop.jpg");
      const indicatorArray = indicatorStatus;
      indicatorArray.map((indicator, i) => {
        indicatorArray[i] = false;
      });
      indicatorArray[3] = true;
    } else {
      newBg("/assets/home/background-home-desktop.jpg");
      const indicatorArray = indicatorStatus;
      indicatorArray.map((indicator, i) => {
        indicatorArray[i] = false;
      });
      indicatorArray[0] = true;
    }
  }, [location.pathname]);

  return (
    <body
      className={`w-[100vw] h-[100vh] bg-center bg-cover text-white box-border flex flex-col max-h-[100vh] `}
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      <Navbar
        changeBg={changeBg}
        indicatorStatus={indicatorStatus}
        toggleIndicator={toggleIndicator}
      />
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

        <Route path="/destination" element={<DestinationLayout />}>
          {data.destinations.map((destination) => (
            <Route
              key={destination.name}
              path={destination.name.toLocaleLowerCase()}
              element={<Destination destination={destination} />}
            ></Route>
          ))}
          <Route index element={<Navigate to="./moon" replace />} />
        </Route>
        <Route index element={<Navigate to="Homepage" replace />} />
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
  );
}

export default App;

function DestinationLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
