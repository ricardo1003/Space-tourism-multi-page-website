import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <body className="w-[100vw] h-[100vh] bg-[url('./assets/home/background-home-desktop.jpg')] bg-center bg-cover text-white box-border flex flex-col justify-between">
      {/* <nav>
        <Link to="/crew-engineer">2 </Link>
        <Link to="/crew-pilot">3 </Link>
        <Link to="/crew-specialist">4 </Link>
        <Link to="/destination-europa">5 </Link>
        <Link to="/destination-mars">6 </Link>
        <Link to="/destination-titan">8 </Link>
        <Link to="/technology-capsule">9 </Link>
        <Link to="/technology-spaceport">10 </Link>
      </nav> */}
      <header className="h-[96px] flex items-center mt-[40px]">
        <img
          src="./src/assets/shared/logo.svg"
          alt="logo"
          className="w-[48px] h-[48px] mx-16"
        />
        <div className="bg-[#979797] h-[1px] w-full block shadow-[50px_0_0_#979797] z-10 relative"></div>
        <nav className=" bg-white/5 backdrop-blur h-full flex items-center px-16 font-Barlow tracking-[2px] z-1 relative">
          <ol className="flex flex-row justify-between gap-[48px] pl-[95px] ">
            <li>
              <Link
                to="/Homepage"
                className="flex flex-row relative gap-3 before:block before:h-1 before:bg-white before:absolute before:bottom-[-35px] before:w-full"
              >
                <b>00</b> HOME
              </Link>
            </li>
            <li>
              <Link
                to="/destination-moon"
                className="flex flex-row relative gap-3 before:hidden before:h-1 before:bg-white before:absolute before:bottom-[-35px] before:w-full"
              >
                <b>01</b> DESTINATION
              </Link>
            </li>
            <li>
              <Link
                to="/crew-commander"
                className="flex flex-row relative gap-3 before:hidden before:h-1 before:bg-white before:absolute before:bottom-[-35px] before:w-full"
              >
                <b>02</b> CREW
              </Link>
            </li>
            <li>
              <Link
                to="/technology-vehicle"
                className="flex flex-row relative gap-3 before:hidden before:h-1 before:bg-white before:absolute before:bottom-[-35px] before:w-full"
              >
                <b>03</b> TECHNOLOGY
              </Link>
            </li>
          </ol>
        </nav>
      </header>
      <main className="flex justify-between mx-[165px] my-[128px] gap-[298px]">
        <div>
          <h1 className="flex flex-col font-Barlow text-Blue-300">
            SO, YOU WANT TO TRAVEL TO
            <span className="font-Bellefair text-[100px] text-white">
              SPACE
            </span>
          </h1>
          <p className="text-Blue-300 text-[18px] font-Barlow leading-[1.8em] font-light">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link className="bg-white rounded-full h-[272px] aspect-square text-black flex items-center justify-center font-Bellefair text-[32px]">
          EXPLORE
        </Link>
      </main>
    </body>
  );
}
