import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Top 0.3% in AP Eamcet"
            subTitle="Academic Performance"
            result="Top 0.3%"
            des="Achieved top 0.3% ranking in AP Eamcet, showcasing exceptional academic performance."
          />
          <ResumeCard
            title="Top 5% in INMO 2017"
            subTitle="Mathematics Olympiad"
            result="Top 5%"
            des="Ranked in the top 5% in INMO 2017, demonstrating strong problem-solving skills in mathematics."
          />
          <ResumeCard
            title="Solved 300+ Problems"
            subTitle="LeetCode & GFG"
            result="300+ Problems Solved"
            des="Successfully solved over 300 problems on LeetCode and GFG, reflecting advanced coding and algorithm skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
