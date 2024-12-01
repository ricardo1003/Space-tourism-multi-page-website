import data from "../data.json";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TechnologyVehicle({ tech, cleanPath }) {

  const location = useLocation();

  const [indicatorStatus, toggleIndicator] = useState([true,false,false])

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    const newIndicatorStatus = data.technology.map((tech, i) =>
      path.replace(/%20/g, " ").endsWith(tech.name.toLowerCase()));

    toggleIndicator(newIndicatorStatus);
  }, [location.pathname]);

  return (
    <main className="flex items-center justify-center flex-col w-full pl-[165px] pb-[115px] max-h-[100vh] overflow-hidden">
      <h1 className="font-Barlow text-[28px] tracking-[4px] self-start mt-[4vh] mb-[6vh]">
        <b className="tracking-[4.72px] text-white/25">03</b> SPACE LAUNCH 101
      </h1>
      <section className="flex items-center w-full justify-between">
        <div className="flex max-w-[635px] gap-16">
          <nav>
            <ol className="flex flex-col justify-between h-full">
              {data.technology.map((tech, i) => (
                <li key={tech.name}>
                  <Link
                    to={`/technology/${tech.name}`}
                    className={`border-solid border-2 ${
                      indicatorStatus[i]
                        ? "border-white bg-white text-black"
                        : "border-white/25"
                    } rounded-full size-[80px] flex items-center justify-center font-Bellefair text-[32px]`}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <div>
            <h2 className="flex flex-col uppercase font-Bellefair text-[56px] gap-0">
              <span className="text-[hsla(0,0%,100%,0.5042)] text-[32px] uppercase">
                the terminology...
              </span>
              {tech.name}
            </h2>
            <p className="font-Barlow text-[18px] leading-[1.8em] text-Blue-300 ">
              {tech.description}
            </p>
          </div>
        </div>
        <picture>
          <img src={cleanPath(tech.images.portrait)} alt={tech.name} />
        </picture>
      </section>
    </main>
  );
}
