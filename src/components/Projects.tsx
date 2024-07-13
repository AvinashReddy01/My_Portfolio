import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo,projectFour } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Virtual Chat"
            des="Developed a virtual chat platform leveraging Node.js and Express for the backend, and React for the frontend. Integrated GPT-3 for advanced chat and content features, boosting engagement by 40%. Added tools for text summarization, code conversion, and AI-generated images."
            src={projectOne}
          />
          <ProjectsCard
            title="Spotify Music"
            des=" Participated in Flipr Hackathon 2023, creating a music app with MERN stack. Developed a user-friendly interface for song search, playlist creation, and playback via Spotify Web API. Implemented features that significantly enhanced the music experience and user engagement."
            src={projectTwo}
          />
          <ProjectsCard
            title="Food Delivery website"
            des="A food delivery website using the MERN stack that enables users to browse restaurants, view menus, place orders, and track deliveries. It features user authentication, real-time order updates, and an admin panel for managing restaurant and menu data. The platform offers a seamless and interactive experience with secure payment options and advanced search functionality."
            src={projectThree}
          />
          <ProjectsCard
            title="Local Agricultural Market Platform for Villagers"
            des="Working on a platform to connect villagers directly with buyers, allowing them to list products and manage sales. The project uses the MERN stack, including setting up a Node.js and Express backend, a MongoDB database, and a React frontend. The application includes routing and form handling and is deployed using MongoDB Atlas. The project aims to create a seamless and efficient marketplace for agricultural products."
            src={projectFour}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
