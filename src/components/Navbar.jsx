import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import data from "../data.json";

export default function Navbar({
  handleNavigation,
  handleBackgroundChange,
  backgrounds,
}) {
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

  const [isClicked, setIsClicked] = useState(false)

  const showNavBar = ()=>{
    isClicked ? setIsClicked(false) : setIsClicked(true)
  }

  return (
    <header className="min-h-[96px] flex items-center justify-between mt-[40px] max-[769px]:mt-0">
      <img
        src="/assets/shared/logo.svg"
        alt="logo"
        className="w-[48px] h-[48px] mx-16 max-[769px]:mx-[40px]"
      />
      <div className="flex w-[50vw] shadow-[50px_0_0_#979797] z-10 relative max-[769px]:hidden">
        <div className="absolute bg-[#979797] block z-10 h-[1px] w-[115%]" />
      </div>
      <button
        className="hidden max-[693px]:block w-6 absolute right-6 z-10"
        onClick={() => {
          showNavBar()
        }}
      >
        <img src="/assets/shared/icon-hamburger.svg" alt="openNav" className={isClicked ? "hidden" : "block"}/>
        <img src="/assets/shared/icon-close.svg" alt="closeNav" className={isClicked ? "block" : "hidden"}/>
      </button>
      <nav className={`bg-white/5 backdrop-blur h-full flex justify-end items-center px-16 font-Barlow tracking-[2px] z-1 relative max-w-[745.55px] w-full max-[693px]:max-w-[254px] max-[693px]:h-[100vh] max-[693px]:absolute max-[693px]:z-20 max-[693px]:right-0 max-[693px]:top-0 max-[693px]:pt-[133px] max-[693px]:px-0 max-[693px]:pl-8 max-[693px]:items-start max-[693px]:backdrop-blur-2xl max-[693px]:bg-black/15 transition-transform ${isClicked ? "max-[693px]:translate-x-0" : "max-[693px]:translate-x-[100%]"}`}>
        <ol className="flex flex-row justify-between max-w-[522.55px] gap-[20px] w-full h-full items-center max-[693px]:flex-col max-[693px]:h-auto">
          {destinations.map((dest, i) => (
            <li
              key={i}
              className="h-full max-[693px]:h-auto max-[693px]:w-full"
            >
              <button
                onClick={() => {
                  handleNavigation(dest);
                  handleBackgroundChange(backgrounds[i]);
                }}
                className={`flex flex-row relative h-full items-center gap-3 ${
                  indicatorStatus[i] ? "before:block" : "before:hidden"
                } before:h-1 before:bg-white before:absolute before:bottom-0 before:w-full uppercase max-[693px]:before:right-0 max-[693px]:w-full max-[693px]:before:w-1 max-[693px]:before:h-full`}
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
