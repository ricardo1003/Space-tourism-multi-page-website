import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
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
  const [currentBg, setCurrentBg] = useState(
    "./assets/home/background-home-desktop.jpg"
  );
  const [nextBg, setNextBg] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const [indicatorStatus, toggleIndicator] = useState([
    true,
    false,
    false,
    false,
  ]);

  const backgrounds = [
    "./assets/home/background-home-desktop.jpg",
    "./assets/destination/background-destination-desktop.jpg",
    "./assets/crew/background-crew-desktop.jpg",
    "./assets/technology/background-technology-desktop.jpg",
  ];
  useEffect(() => {
    const path = location.pathname;

    const newIndicatorArray = [false, false, false, false];

    if (path.startsWith("/destination")) {
      setNextBg(backgrounds[1]);
      newIndicatorArray[1] = true;
    } else if (path.startsWith("/crew")) {
      setNextBg(backgrounds[2]);
      newIndicatorArray[2] = true;
    } else if (path.startsWith("/technology")) {
      setNextBg(backgrounds[3]);
      newIndicatorArray[3] = true;
    } else {
      setNextBg(backgrounds[0]);
      newIndicatorArray[0] = true;
    }
    toggleIndicator(newIndicatorArray);
  }, [location.pathname]);

  const handleBackgroundChange = (newBg) => {
    setNextBg(newBg);
    setTimeout(() => setCurrentBg(newBg), 500);
  };

  const handleNavigation = (path) => {
    setIsExiting(true);
    setTimeout(() => {
      navigate(path);
      setIsExiting(false);
    }, 500);
  };

  const cleanPath = (path) => path.replace(/^\./, "");

  const pageTransitions = {
    initial: 0,
    animate: 1,
    exit: 0,
    transition: 0.5,
  };

  return (
    <motion.body
      className={`w-[100vw] h-[100vh] bg-center bg-cover text-white box-border flex flex-col max-h-[100vh] relative overflow-x-hidden`}
      key={currentBg}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0 }}
    >
      <div
        className={`fixed block top-0 right-0 w-full h-full bg-center bg-cover -z-10 ${currentBg && nextBg === backgrounds[0] ? "max-[769px]:rotate-90 max-[769px]:w-[100vh]" : ""} ${currentBg === backgrounds[0] && nextBg !== backgrounds[0] ? "max-[769px]:rotate-90 max-[769px]:w-[100vh]" : ""} ${currentBg !== backgrounds[0] && nextBg === backgrounds[0] ? "max-[769px]:rotate-[0] max-[769px]:w-[100vh]" : ""}`}
        style={{
          backgroundImage: `url(${currentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          key={nextBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`${currentBg !== backgrounds[0] && nextBg === backgrounds[0] ? "max-[769px]:rotate-90" : ""} ${currentBg === backgrounds[0] && nextBg !== backgrounds[0] ? "max-[769px]:-rotate-90 " : ""}`}
          style={{
            backgroundImage: `url(${nextBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
          }}
        />
      </div>
      <Navbar
        handleNavigation={handleNavigation}
        handleBackgroundChange={handleBackgroundChange}
        backgrounds={backgrounds}
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
                isExiting={isExiting}
                handleBackgroundChange={handleBackgroundChange}
                backgrounds={backgrounds}
                handleNavigation={handleNavigation}
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
                    isExiting={isExiting}
                    handleBackgroundChange={handleBackgroundChange}
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
                    isExiting={isExiting}
                    handleBackgroundChange={handleBackgroundChange}
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
                    isExiting={isExiting}
                    handleBackgroundChange={handleBackgroundChange}
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
    </motion.body>
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
