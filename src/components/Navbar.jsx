import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import data from "../data.json";

export default function Navbar({ handleNavigation, handleBackgroundChange, backgrounds }) {
  const location = useLocation();
  const destinations = ["Homepage", "destination", "crew", "technology"];

  const [indicatorStatus, toggleIndicator] = useState([
    true,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const path = location.pathname;

    const newIndicatorStatus = destinations.map((dest, i) =>
      path.toLowerCase().startsWith(`/${dest.toLowerCase()}`)
    );
    toggleIndicator(newIndicatorStatus);
  }, [location.pathname, data.destinations]);

  return (
    <header className="min-h-[96px] flex items-center mt-[40px]">
      <img
        src="/assets/shared/logo.svg"
        alt="logo"
        className="w-[48px] h-[48px] mx-16"
      />
      <div className="bg-[#979797] h-[1px] w-full block shadow-[50px_0_0_#979797] z-10 relative"></div>
      <nav className=" bg-white/5 backdrop-blur h-full flex items-center px-16 font-Barlow tracking-[2px] z-1 relative">
        <ol className="flex flex-row justify-between gap-[48px] pl-[95px] ">
          {destinations.map((dest, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  handleNavigation(dest);
                  handleBackgroundChange(backgrounds[i]);
                }}
                className={`flex flex-row relative gap-3 ${
                  indicatorStatus[i] ? "before:block" : "before:hidden"
                } before:h-1 before:bg-white before:absolute before:bottom-[-35px] before:w-full uppercase`}
              >
                <b>{`0${i}`}</b>
                {` ${dest === destinations[0] ? "home" : dest}`}
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
