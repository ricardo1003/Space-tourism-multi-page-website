import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
{
  /* <nav>
  <Link to="/crew-engineer">2 </Link>
  <Link to="/crew-pilot">3 </Link>
  <Link to="/crew-specialist">4 </Link>
  <Link to="/destination-europa">5 </Link>
  <Link to="/destination-mars">6 </Link>
  <Link to="/destination-titan">8 </Link>
  <Link to="/technology-capsule">9 </Link>
  <Link to="/technology-spaceport">10 </Link>
</nav>  */
}

export default function HomePage({ indicatorStatus, toggleIndicator, changeBg }) {
  const navigate = useNavigate();
  return (
    <main className="flex justify-between mx-[165px] my-[128px] gap-[298px]">
      <div>
        <h1 className="flex flex-col font-Barlow text-Blue-300">
          SO, YOU WANT TO TRAVEL TO
          <span className="font-Bellefair text-[100px] text-white">SPACE</span>
        </h1>
        <p className="text-Blue-300 text-[18px] font-Barlow leading-[1.8em] font-light">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button
        className="bg-white rounded-full h-[272px] aspect-square text-black flex items-center justify-center font-Bellefair text-[32px]"
        onClick={() => {
          console.log("hola");
          changeBg("/assets/destination/background-destination-desktop.jpg");
          const indicatorArray = indicatorStatus;
          indicatorArray.map((indicator, i) => {
            indicatorArray[i] = false;
          });
          indicatorArray[1] = true;
          toggleIndicator(indicatorArray);
          navigate("/destination-moon");
        }}
      >
        EXPLORE
      </button>
    </main>
  );
}
