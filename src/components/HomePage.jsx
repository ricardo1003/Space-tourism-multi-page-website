import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage({
  indicatorStatus,
  toggleIndicator,
  pageTransitions,
  isExiting,
  backgrounds,
  handleBackgroundChange,
  handleNavigation,
}) {
  const navigate = useNavigate();
  return (
    <motion.main
      className="h-full flex justify-between items-end mx-[165px] mt-auto mb-[128px] max-[769px]:flex-col max-[769px]:items-center max-[769px]:gap-[66px] max-[458px]:m-6 max-[458px]:gap-2"
      initial={{ opacity: pageTransitions.initial }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: pageTransitions.exit }}
      transition={{ duration: pageTransitions.transition }}
    >
      <div className="max-[769px]:text-center">
        <h1 className="flex flex-col font-Barlow text-Blue-300 max-[769px]:text-[28px] max-[769px]:tracking-[4px] max-[458px]:text-[16px] max-[458px]:tracking-[0.15em]">
          SO, YOU WANT TO TRAVEL TO
          <span className="font-Bellefair text-[100px] text-white max-[769px]:text-[144px] max-[769px]:tracking-[0px] max-[458px]:text-[80px]">SPACE</span>
        </h1>
        <p className="max-w-[540px] text-Blue-300 text-[18px] font-Barlow leading-[1.8em] font-light max-[769px]:text-[16px] max-[458px]:text-[15px] max-[458px]:max-w-full">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button
        className="bg-white rounded-full h-[272px] aspect-square text-black flex items-center justify-center font-Bellefair text-[32px] mx-[20px] max-[458px]:h-[144px] max-[458px]:text-lg max-[458px]:my-auto"
        onClick={() => {
          const indicatorArray = indicatorStatus;
          indicatorArray.map((indicator, i) => {
            indicatorArray[i] = false;
          });
          indicatorArray[1] = true;
          handleBackgroundChange(backgrounds[1]);
          handleNavigation("destination/moon")
          toggleIndicator(indicatorArray);
        }}
      >
        EXPLORE
      </button>
    </motion.main>
  );
}
