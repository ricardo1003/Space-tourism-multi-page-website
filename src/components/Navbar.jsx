import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ changeBg, indicatorStatus, toggleIndicator }) {
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
          <li>
            <Link
              to="/Homepage"
              className={`flex flex-row relative gap-3 before:${
                indicatorStatus[0] ? "block" : "hidden"
              } before:h-1 before:bg-white before:absolute before:bottom-[-35px] before:w-full`}
              onClick={() => {
                changeBg("/assets/home/background-home-desktop.jpg");
              }}
            >
              <b>00</b> HOME
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className={`flex flex-row relative gap-3 before:${
                indicatorStatus[1] ? "block" : "hidden"
              } before:h-1 before:bg-white before:absolute before:bottom-[-35px] before:w-full`}
              onClick={() => {
                console.log("hola");
                changeBg(
                  "/assets/destination/background-destination-desktop.jpg"
                );
              }}
            >
              <b>01</b> DESTINATION
            </Link>
          </li>
          <li>
            <Link
              to="/crew-commander"
              className={`flex flex-row relative gap-3 before:${
                indicatorStatus[2] ? "block" : "hidden"
              } before:h-1 before:bg-white before:absolute before:bottom-[-35px] before:w-full`}
              onClick={() => {
                changeBg("/assets/crew/background-crew-desktop.jpg");
              }}
            >
              <b>02</b> CREW
            </Link>
          </li>
          <li>
            <Link
              to="/technology-vehicle"
              className={`flex flex-row relative gap-3 before:${
                indicatorStatus[3] ? "block" : "hidden"
              } before:h-1 before:bg-white before:absolute before:bottom-[-35px] before:w-full`}
              onClick={() => {
                changeBg(
                  "/assets/technology/background-technology-desktop.jpg"
                );
              }}
            >
              <b>03</b> TECHNOLOGY
            </Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}
