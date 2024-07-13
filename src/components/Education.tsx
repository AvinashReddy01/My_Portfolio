import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Science and Engineering"
            subTitle="IIT Jammu (2021 - 2025)"
            result="CGPA 8.30"
            des="Currently pursuing B.Tech with a minor in Computer Science and Engineering, maintaining a CGPA of 8.30."
          />
          <ResumeCard
            title="FIITJEE Junior College"
            subTitle="12th Standard (2019 - 2021)"
            result="Percentage 98.7%"
            des="Completed 12th standard with a percentage of 98.7%, reflecting strong academic performance."
          />
          <ResumeCard
            title="Narayana School"
            subTitle="10th Standard (2018 - 2019)"
            result="CGPA 10.00"
            des="Completed 10th standard with a CGPA of 10, demonstrating excellent foundational knowledge."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
