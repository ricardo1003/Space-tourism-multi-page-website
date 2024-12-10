import data from "../data.json";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DestinationLayout({ destination, pageTransitions, isExiting }) {
  const location = useLocation();

  const [indicatorStatus, toggleIndicator] = useState([
    true,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    const newIndicatorStatus = data.destinations.map((dest, i) =>
      path.endsWith(dest.name.toLowerCase())
    );

    toggleIndicator(newIndicatorStatus);
  }, [location.pathname, data.destinations]);
  return (
    <motion.main
      className="flex items-center justify-center flex-col w-full px-[165px] max-[769px]:px-[40px] max-[769px]:pb-[40px] "
      initial={{ opacity: pageTransitions.initial }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: pageTransitions.exit }}
      transition={{ duration: pageTransitions.transition }}
    >
      <h1 className="flex font-Barlow text-[28px] max-[769px]:text-[20px] tracking-[4px] max-[769px]:tracking-[15%] self-start mt-[4vh] mb-[6vh] max-[458px]:text-[16px] max-[458px]:self-center max-[458px]:gap-6">
        <b className="tracking-[4.72px] text-white/25">01</b> PICK YOUR
        DESTINATION
      </h1>
      <article className="flex justify-between items-start gap-[108.5px] w-full max-[769px]:flex-col max-[769px]:items-center max-[769px]:gap-[74px] ">
        <picture className="max-w-full max-h-full ">
          <img
            src={destination.images.png}
            alt={destination.name}
            className="max-w-full max-h-full max-[769px]:max-w-[300px] max-[769px]:max-h-[300px] max-[458px]:max-w-[150px]"
          />
        </picture>
        <section className="flex flex-col gap-[40px] max-[769px]:items-center max-[769px]:gap-[24px]">
          <nav>
            <ol className="flex gap-8 font-Barlow tracking-[2px] text-base text-Blue-300 relative max-[458px]:text-sm max-[458px]:tracking-[0.15em]">
              {data.destinations.map((dest, i) => (
                <li className="relative" key={dest.name}>
                  <Link
                    to={`/destination/${dest.name.toLowerCase()}`}
                    className={`${
                      indicatorStatus[i]
                        ? "before:block text-white"
                        : "before:hidden"
                    } before:bg-white before:w-full before:h-[3px] before:absolute before:bottom-[-10px]`}
                  >
                    {dest.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <h2 className="font-Bellefair text-8xl uppercase max-[458px]:text-[56px]">
            {destination.name}
          </h2>
          <p className="text-Blue-300 font-Barlow text-lg max-w-[500px] max-[769px]:max-w-[514px] max-[769px]:text-center max-[769px]:text-[16px] max-[769px]:tracking-0 max-[769px]:leading-[180%] max-[458px]:text-[15px]">
            {destination.description}
          </p>
          <hr className="border-white/25 w-full" />
          <div className="flex justify-between w-full max-[769px]:grid max-[769px]:grid-flow-col max-[769px]:grid-cols-2 max-[458px]:grid-rows-2 max-[458px]:grid-cols-1 max-[458px]:gap-6">
            <div className="flex flex-col max-[769px]:items-center">
              <h3 className="font-Barlow text-Blue-300 text-sm tracking-[2px]">
                AVG. DISTANCE
              </h3>
              <p className="font-Bellefair text-[28px] uppercase">
                {destination.distance}
              </p>
            </div>
            <div className="flex flex-col max-[769px]:items-center">
              <h3 className="font-Barlow text-Blue-300 text-sm tracking-[2px]">
                EST. TRAVEL TIME
              </h3>
              <p className="font-Bellefair text-[28px] uppercase">
                {destination.travel}
              </p>
            </div>
          </div>
        </section>
      </article>
    </motion.main>
  );
}
