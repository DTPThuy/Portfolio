import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text*/}
      <div
        className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
      to-back/10"
      >
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto"
        >
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hi, I'm Đặng Thúy <br />{" "}
            <span className="text-accent"> Data Analyst </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I have 1.5 year experence Data Analyst, 1 year experence Backend
            Java Developer.
          </motion.p>
          {/* btn  */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image  */}
      <div>image</div>
    </div>
  );
};

export default Home;