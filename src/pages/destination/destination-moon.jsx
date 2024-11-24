export default function DestinationMoon() {
  return (
    <main className="flex items-center justify-center flex-col w-full px-[165px] max-h-full">
      <h1 className="font-Barlow text-[28px] tracking-[4px] self-start mt-[4vh] mb-[6vh]">
        <b className="tracking-[4.72px] text-white/25">01</b> PICK YOUR DESTINATION
      </h1>
      <article className="flex justify-between items-start gap-[108.5px] w-full">
        <picture className="max-w-full max-h-full h-[90%]">
          <img
            src="/assets/destination/image-moon.png"
            alt="moon"
            className="max-w-full max-h-full"
          />
        </picture>
        <section className="flex flex-col gap-[40px]">
          <nav>
            <ol className="flex gap-8 font-Barlow tracking-[2px] text-base text-Blue-300">
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ol>
          </nav>
          <h2 className="font-Bellefair text-8xl">NAME</h2>
          <p className="text-Blue-300 font-Barlow text-lg max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sit corrupti distinctio? Sint, laudantium voluptatem,
            incidunt aliquid praesentium expedita quam unde fuga a non eum
            doloribus velit, ipsum assumenda?
          </p>
          <hr className="border-white/25" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-Barlow text-Blue-300 text-sm tracking-[2px]">
                LABEL
              </h3>
              <p className="font-Bellefair text-[28px]">INFO</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-Barlow text-Blue-300 text-sm tracking-[2px]">
                LABEL
              </h3>
              <p className="font-Bellefair text-[28px]">INFO</p>
            </div>
          </div>
        </section>
      </article>
      {/* 00 Home
  01 Destination
  02 Crew
  03 Technology

  01 Pick your destination

  Moon
  Mars
  Europa
  Titan

  Moon

  See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.

  Avg. distance
  384,400 km

  Est. travel time
  3 days 
  */}
    </main>
  );
}
