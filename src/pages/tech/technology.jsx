export default function TechnologyVehicle() {
  return (
    <main className="flex items-center justify-center flex-col w-full pl-[165px] max-h-[100vh] overflow-hidden">
      <h1 className="font-Barlow text-[28px] tracking-[4px] self-start mt-[4vh] mb-[6vh]">
        <b className="tracking-[4.72px] text-white/25">03</b> SPACE LAUNCH 101
      </h1>
      <section className="flex items-center w-full justify-between">
        <div className="flex max-w-[635px] gap-16">
          <nav>
            <ol className="flex flex-col justify-between h-full">
              <li className="border-solid border-2 border-white bg-white text-black rounded-full size-[80px] flex items-center justify-center font-Bellefair text-[32px]">
                1
              </li>
              <li className="border-solid border-2 border-white/25 rounded-full size-[80px] flex items-center justify-center font-Bellefair text-[32px]">
                2
              </li>
              <li className="border-solid border-2 border-white/25 rounded-full size-[80px] flex items-center justify-center font-Bellefair text-[32px]">
                3
              </li>
            </ol>
          </nav>
          <div>
            <h2 className="flex flex-col uppercase font-Bellefair text-[56px] gap-0">
              <span className="text-[hsla(0,0%,100%,0.5042)] text-[32px]">
                the terminology...
              </span>{" "}
              launch vehicle
            </h2>
            <p className="font-Barlow text-[18px] leading-[1.8em] text-Blue-300 ">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
        <picture >
          <img
            src="/assets/technology/image-launch-vehicle-portrait.jpg"
            alt="LaunchVehicle"
          />
        </picture>
      </section>
      {/* 00 Home
  01 Destination
  02 Crew
  03 Technology

  03 Space launch 101

  1
  2
  3

  The terminology...
  Launch vehicle

   */}
    </main>
  );
}
