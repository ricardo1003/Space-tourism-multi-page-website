import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import data from "./data.json";

import Crew from "./pages/crew";
import Destination from "./pages/destination";
import Technology from "./pages/technology";

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  const [currentBg, newBg] = useState(
    "/assets/home/background-home-desktop.jpg"
  );
  const location = useLocation();

  const [indicatorStatus, toggleIndicator] = useState([
    true,
    false,
    false,
    false,
  ]);
  useEffect(() => {
    const path = location.pathname;

    const newIndicatorArray = [false, false, false, false];

    if (path.startsWith("/destination")) {
      newBg("/assets/destination/background-destination-desktop.jpg");
      newIndicatorArray[1] = true;
    } else if (path.startsWith("/crew")) {
      newBg("/assets/crew/background-crew-desktop.jpg");
      newIndicatorArray[2] = true;
    } else if (path.startsWith("/technology")) {
      newBg("/assets/technology/background-technology-desktop.jpg");
      newIndicatorArray[3] = true;
    } else {
      newBg("/assets/home/background-home-desktop.jpg");
      newIndicatorArray[0] = true;
    }
    console.log(newIndicatorArray);
    toggleIndicator(newIndicatorArray);
  }, [location.pathname]);

  const cleanPath = (path) => path.replace(/^\./, "");

  const pageTransitions = {
    initial: 0,
    animate: 1,
    exit: 0,
    transition: 0.5,
  };

  return (
    <body
      className={`w-[100vw] h-[100vh] bg-center bg-cover text-white box-border flex flex-col max-h-[100vh] `}
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      <Navbar
        indicatorStatus={indicatorStatus}
        toggleIndicator={toggleIndicator}
      />
      <AnimatePresence mode="wait">
        <Routes>
          <Route index element={<Navigate to="Homepage" replace />} />
          <Route
            path="/HomePage"
            element={
              <HomePage
                indicatorStatus={indicatorStatus}
                toggleIndicator={toggleIndicator}
                pageTransitions={pageTransitions}
              />
            }
          />

          <Route path="/destination" element={<DestinationLayout />}>
            {data.destinations.map((destination) => (
              <Route
                key={destination.name}
                path={destination.name.toLocaleLowerCase()}
                element={
                  <Destination
                    destination={destination}
                    cleanPath={cleanPath}
                    pageTransitions={pageTransitions}
                  />
                }
              ></Route>
            ))}
            <Route index element={<Navigate to="./moon" replace />} />
          </Route>

          <Route path="/crew" element={<CrewLayout />}>
            {data.crew.map((crew) => (
              <Route
                key={crew.role}
                path={crew.role.toLocaleLowerCase()}
                element={
                  <Crew
                    crew={crew}
                    cleanPath={cleanPath}
                    pageTransitions={pageTransitions}
                  />
                }
              ></Route>
            ))}
            <Route index element={<Navigate to="./commander" replace />} />
          </Route>

          <Route path="/technology" element={<TechnologyLayout />}>
            {data.technology.map((tech) => (
              <Route
                key={tech.name}
                path={tech.name.toLocaleLowerCase()}
                element={
                  <Technology
                    tech={tech}
                    cleanPath={cleanPath}
                    pageTransitions={pageTransitions}
                  />
                }
              ></Route>
            ))}
            <Route
              index
              element={<Navigate to="./launch%20vehicle" replace />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
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
function CrewLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
function TechnologyLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
