import data from "../data.json";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TechnologyVehicle({ tech, pageTransitions, isExiting }) {
  const location = useLocation();

  const [indicatorStatus, toggleIndicator] = useState([true, false, false]);

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    const newIndicatorStatus = data.technology.map((tech, i) =>
      path.replace(/%20/g, " ").endsWith(tech.name.toLowerCase())
    );

    toggleIndicator(newIndicatorStatus);
  }, [location.pathname]);

  return (
    <motion.main
      className="flex items-center justify-center flex-col w-full pl-[165px] pb-[115px] max-h-[100%] max-[769px]:px-0 max-[769px]:pb-0 max-[458px]:block max-[458px]:text-center"
      initial={{ opacity: pageTransitions.initial }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: pageTransitions.exit }}
      transition={{ duration: pageTransitions.transition }}
    >
      <h1 className="font-Barlow text-[28px] tracking-[4px] self-start mt-[4vh] mb-[6vh] max-[769px]:text-[20px] max-[769px]:tracking-[.15em] max-[769px]:px-[40px] max-[458px]:text-[16px] max-[458px]:gap-6">
        <b className="tracking-[4.72px] text-white/25 max-[769px]:tracking-[.15em">03</b> SPACE LAUNCH 101
      </h1>
      <section className="flex items-center w-full justify-between max-[769px]:flex-col-reverse max-[458px]:justify-start">
        <div className="flex max-w-[635px] gap-16 max-[769px]:flex-col max-[769px]:items-center max-[769px]:text-center max-[458px]:gap-10 max-[769px]:px-[40px] max-[769px]:pb-[40px]">
          <nav>
            <ol className="flex flex-col justify-between h-full max-[769px]:flex-row max-[769px]:gap-4">
              {data.technology.map((tech, i) => (
                <li key={tech.name}>
                  <Link
                    to={`/technology/${tech.name}`}
                    className={`border-solid border-2 ${
                      indicatorStatus[i]
                        ? "border-white bg-white text-black"
                        : "border-white/25"
                    } rounded-full size-[80px] flex items-center justify-center font-Bellefair text-[32px] max-[769px]:size-[56px] max-[769px]:text-2xl max-[458px]:size-10 max-[458px]:text-lg`}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <div>
            <h2 className="flex flex-col uppercase font-Bellefair text-[56px] gap-0 max-[769px]:text-[40px] max-[458px]:text-2xl max-[458px]:gap-4 max-[458px]:mb-4">
              <span className="text-[hsla(0,0%,100%,0.5042)] text-[32px] uppercase max-[769px]:text-2xl max-[458px]:text-lg">
                the terminology...
              </span>
              {tech.name}
            </h2>
            <p className="font-Barlow text-[18px] leading-[1.8em] text-Blue-300 max-[769px]:text-[16px] max-[769px]:max-w-[512px] max-[458px]:text-[15px]">
              {tech.description}
            </p>
          </div>
        </div>
        <picture className="flex items-center justify-center max-[769px]:w-full max-[769px]:overflow-y-hidden max-[769px]:max-h-[37vh] max-[769px]:h-full max-[769px]:mb-8 max-[458px]:max-h-[30vh] relative">
          <img src={tech.images.portrait} alt={tech.name} className="max-[769px]:w-100vw max-[458px]:w-[100vw] max-[458px]:relative z-[5]"/>
        </picture>
      </section>
    </motion.main>
  );
}
