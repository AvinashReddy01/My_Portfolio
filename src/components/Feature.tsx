// import { AiFillAppstore } from "react-icons/ai";
import {FaGlobe, FaCode, FaRunning } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiMongodb, SiReact, SiNodedotjs } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Web Development"
            des="Experienced in developing web applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB."
            icon={<FaCode />}
          />
          <Card
            title="AI Integration"
            des="Integrated GPT-3 for advanced chat and content features, enhancing user engagement."
            icon={<SiProgress />}
          />
          <Card
            title="Frontend Development"
            des="Specialized in creating user-friendly interfaces and ensuring seamless user experiences."
            icon={<SiReact />}
          />
          <Card
            title="Backend Development"
            des="Proficient in building and maintaining server-side logic using Node.js and Express."
            icon={<SiNodedotjs />}
          />
          <Card
            title="Database Management"
            des="Experienced in managing databases with MongoDB, ensuring efficient data storage and retrieval."
            icon={<SiMongodb />}
          />
          <Card
            title="Hosting Websites"
            des="Proficient in deploying and hosting websites, ensuring high availability and performance."
            icon={<FaGlobe />}
          />
          <Card
            title="UX Design"
            des="Designing intuitive user interfaces with a focus on user experience and accessibility."
            icon={<SiAntdesign />}
          />
          <Card
            title="Sports"
            des="Passionate about playing cricket and badminton, showcasing teamwork, strategic thinking, agility, and competitive spirit."
            icon={<FaRunning />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
