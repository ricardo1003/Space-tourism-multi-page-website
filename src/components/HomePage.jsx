import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
        <nav>
            <Link to='/crew-commander'>1 </Link>
            <Link to='/crew-engineer'>2 </Link>
            <Link to='/crew-pilot'>3 </Link>
            <Link to='/crew-specialist'>4 </Link>
            <Link to='/destination-europa'>5 </Link>
            <Link to='/destination-mars'>6 </Link>
            <Link to='/destination-moon'>7 </Link>
            <Link to='/destination-titan'>8 </Link>
            <Link to='/technology-capsule'>9 </Link>
            <Link to='/technology-spaceport'>10 </Link>
            <Link to='/technology-vehicle'>11 </Link>
        </nav>
      <p>
        00 Home 01 Destination 02 Crew 03 Technology So, you want to travel to
        Space Let’s face it; if you want to go to space, you might as well
        genuinely go to outer space and not hover kind of on the edge of it.
        Well sit back, and relax because we’ll give you a truly out of this
        world experience! Explore
      </p>
    </>
  );
}
