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
      className="flex items-center justify-center flex-col w-full px-[165px] pb-[48px] h-full max-h-[100vh] overflow-x-hidden max-[769px]:px-[40px] max-[769px]:pb-0"
      initial={{ opacity: pageTransitions.initial }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: pageTransitions.exit }}
      transition={{ duration: pageTransitions.transition }}
    >
      <h1 className="flex font-Barlow text-[28px] tracking-[4px] self-start mt-[4vh] mb-[6vh] max-[769px]:text-[24px] max-[769px]:tracking-0 max-[458px]:text-[16px] max-[458px]:self-center max-[458px]:gap-6">
        <b className="tracking-[4.72px] text-white/25">02</b> MEET YOUR CREW
      </h1>
      <section className="flex justify-between w-full max-[769px]:flex-col max-[769px]:items-center text-center h-full">
        <div className="flex flex-col max-w-[539px]">
          <div className="my-auto">
            <h2 className="flex flex-col uppercase font-Bellefair text-[56px] gap-0 max-[769px]:text-[40px] max-[769px]:mb-[24px] max-[458px]:text-2xl">
              <span className="text-[hsla(0,0%,100%,0.5042)] text-[32px] max-[769px]:text-[24px] max-[458px]:text-lg">
                {crew.role}
              </span>
              {crew.name}
            </h2>
            <p className="font-Barlow text-[18px] leading-[1.8em] text-Blue-300 max-[769px]:text-[16px] max-[458px]:text-[15px]">
              {crew.bio}
            </p>
          </div>
          <nav className="mt-auto flex mb-[48px] max-[769px]:justify-center max-[769px]:mt-[48px] ">
            <ol className="flex gap-10 max-[769px]:gap-4">
              {data.crew.map((member, i) => (
                <li key={member.name}>
                  <Link
                    to={`/crew/${member.role}`}
                    className={`block size-[15px] max-[769px]:size-[10px] ${
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
        <picture className="flex items-end max-w-full max-h-[60vh] h-[100%] relative max-[769px]:max-h-[50vh] mt-auto z-10 max-[458px]:mb-2">
          <div className="absolute block w-full h-[25%] bottom-0 bg-gradient-to-t from-Blue-900 from-10% z-10"></div>
          <img
            src={cleanPath(crew.images.png)}
            alt="Douglas"
            className="max-w-full max-h-full block"
          />
        </picture>
      </section>
    </motion.main>
  );
}
