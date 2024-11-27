import data from "../../data.json";
import { Link, useLocation } from "react-router-dom";

export default function CrewCommander() {
  return (
    <main className="flex items-center justify-center flex-col w-full px-[165px] max-h-[100vh] overflow-hidden">
      <h1 className="font-Barlow text-[28px] tracking-[4px] self-start mt-[4vh] mb-[6vh]">
        <b className="tracking-[4.72px] text-white/25">02</b> MEET YOUR CREW
      </h1>
      <section className="flex justify-between w-full">
        <div className="flex flex-col max-w-[539px]">
          <div className="my-auto">
            <h2 className="flex flex-col uppercase font-Bellefair text-[56px] gap-0">
              <span className="text-[hsla(0,0%,100%,0.5042)] text-[32px]">COMMANDER</span>
              DOUGLAS HURLEY
            </h2>
            <p className="font-Barlow text-[18px] leading-[1.8em] text-Blue-300 ">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <nav className="mt-auto">
            <ol className="flex gap-10">
              <li>
                <Link className="block size-[15px] bg-[rgba(255,255,255,0.1744)] rounded-full"></Link>
              </li>
              <li>
                <Link className="block size-[15px] bg-[rgba(255,255,255,0.1744)] rounded-full"></Link>
              </li>
              <li>
                <Link className="block size-[15px] bg-[rgba(255,255,255,0.1744)] rounded-full"></Link>
              </li>
              <li>
                <Link className="block size-[15px] bg-[rgba(255,255,255,0.1744)] rounded-full"></Link>
              </li>
            </ol>
          </nav>
        </div>
        <picture className="max-w-full max-h-[60vh] h-[100%] relative">
          <div className="absolute block w-full h-[25%] bottom-[0] bg-gradient-to-t from-Blue-900 from-10%"></div>
          <img
            src="/assets/crew/image-douglas-hurley.png"
            alt="Douglas"
            className="max-w-full max-h-full"
          />
        </picture>
      </section>
    </main>
  );
}
