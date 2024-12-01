import data from "../data.json";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DestinationLayout({ destination, cleanPath, pageTransitions }) {
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
      className="flex items-center justify-center flex-col w-full px-[165px] max-h-full"
      initial={{ opacity: pageTransitions.initial }}
      animate={{ opacity: pageTransitions.animate }}
      exit={{ opacity: pageTransitions.exit }}
      transition={{ duration: pageTransitions.transition }}
    >
      <h1 className="font-Barlow text-[28px] tracking-[4px] self-start mt-[4vh] mb-[6vh]">
        <b className="tracking-[4.72px] text-white/25">01</b> PICK YOUR
        DESTINATION
      </h1>
      <article className="flex justify-between items-start gap-[108.5px] w-full">
        <picture className="max-w-full max-h-full h-[90%]">
          <img
            src={cleanPath(destination.images.png)}
            alt={destination.name}
            className="max-w-full max-h-full"
          />
        </picture>
        <section className="flex flex-col gap-[40px]">
          <nav>
            <ol className="flex gap-8 font-Barlow tracking-[2px] text-base text-Blue-300 relative">
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
                    {console.log(indicatorStatus)}
                    {dest.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <h2 className="font-Bellefair text-8xl uppercase">
            {destination.name}
          </h2>
          <p className="text-Blue-300 font-Barlow text-lg max-w-[500px]">
            {destination.description}
          </p>
          <hr className="border-white/25" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-Barlow text-Blue-300 text-sm tracking-[2px]">
                AVG. DISTANCE
              </h3>
              <p className="font-Bellefair text-[28px] uppercase">
                {destination.distance}
              </p>
            </div>
            <div className="flex flex-col">
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
