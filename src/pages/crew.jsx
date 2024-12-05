import data from "../data.json";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CrewCommander({ crew, cleanPath, pageTransitions, isExiting }) {
  const location = useLocation();

  const [indicatorStatus, toggleIndicator] = useState([
    true,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    const newIndicatorStatus = data.crew.map((member, i) =>
      path.replace(/%20/g, " ").endsWith(member.role.toLowerCase())
    );
    toggleIndicator(newIndicatorStatus);
  }, [location.pathname]);

  return (
    <motion.main
      className="flex items-center justify-center flex-col w-full px-[165px] max-h-[100vh] overflow-hidden"
      initial={{ opacity: pageTransitions.initial }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: pageTransitions.exit }}
      transition={{ duration: pageTransitions.transition }}
    >
      <h1 className="font-Barlow text-[28px] tracking-[4px] self-start mt-[4vh] mb-[6vh]">
        <b className="tracking-[4.72px] text-white/25">02</b> MEET YOUR CREW
      </h1>
      <section className="flex justify-between w-full">
        <div className="flex flex-col max-w-[539px]">
          <div className="my-auto">
            <h2 className="flex flex-col uppercase font-Bellefair text-[56px] gap-0">
              <span className="text-[hsla(0,0%,100%,0.5042)] text-[32px]">
                {crew.role}
              </span>
              {crew.name}
            </h2>
            <p className="font-Barlow text-[18px] leading-[1.8em] text-Blue-300 ">
              {crew.bio}
            </p>
          </div>
          <nav className="mt-auto">
            <ol className="flex gap-10">
              {data.crew.map((member, i) => (
                <li key={member.name}>
                  <Link
                    to={`/crew/${member.role}`}
                    className={`block size-[15px] ${
                      indicatorStatus[i]
                        ? "bg-[rgba(255,255,255,1)]"
                        : "bg-[rgba(255,255,255,0.1744)]"
                    } rounded-full`}
                  ></Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <picture className="max-w-full max-h-[60vh] h-[100%] relative">
          <div className="absolute block w-full h-[25%] bottom-0 bg-gradient-to-t from-Blue-900 from-10%"></div>
          <img
            src={cleanPath(crew.images.png)}
            alt="Douglas"
            className="max-w-full max-h-full"
          />
        </picture>
      </section>
    </motion.main>
  );
}
