import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaLinkedinIn, FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNodedotjs } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { FaHtml5 } from "react-icons/fa";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Avinash</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          I’m a final year Engineering student at IIT Jammu with a strong background in web development and competitive programming. I’m skilled in various programming languages and tools, and passionate about creating innovative tech solutions.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/avinash-reddy2003" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.instagram.com/avinashreddy119?igsh=bDE2em04NDdkODdq" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://github.com/AvinashReddy01" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best skills on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <CgCPlusPlus />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
