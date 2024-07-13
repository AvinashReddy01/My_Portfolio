import { bannerImg } from "../assets";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative mt-[-100px]">
      <img
        className="w-[225px] h-[270px] lgl:w-[375px] lgl:h-[450px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[262.5px] h-[225px] lgl:w-[375px] lgl:h-[375px] bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadow-shadowOne flex justify-center items-center"></div>
    </FadeIn>
  );
};

export default RightBanner;
