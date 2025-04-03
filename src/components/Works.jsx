import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, video, project_link }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once video is visible
        }
      },
      { threshold: 0.5 } // Load video when 50% of it is in view
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="mt-20">
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        onClick={() => window.open(project_link, "_blank")}
        className="cursor-pointer w-full sm:w-[480px] lg:w-[600px] mb-6"
      >
        <Tilt
          options={{ max: 25, scale: 1, speed: 400 }}
          className="p-6 rounded-2xl w-full flex flex-col items-center shadow-lg bg-transparent border border-gray-700 backdrop-blur-md"
        >
          <div 
            ref={videoRef} 
            className="relative w-full h-[260px] sm:h-[300px] lg:h-[340px] rounded-lg overflow-hidden"
          >
            {isVisible ? (
              <video 
                src={video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-400">
                Loading video...
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-white font-bold text-[26px]">{name}</h3>
            <p className="mt-3 text-secondary text-[16px] max-w-[400px] mx-auto">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </section>
  );
};

const Works = () => {
  return (
    <section id="projects" className="mt-20">
      <motion.div variants={textVariant()} className="mt-20">
        <p className={`${styles.sectionSubText} text-center text-[20px]`}>Projects</p>
        <h2 className={`${styles.sectionHeadText} text-center text-[34px]`}>MY WORK</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-10 text-secondary text-[18px] max-w-3xl leading-[30px] text-center"
        >
          The Following projects showcase my skills and experience through real-world work.
          Sign-in to explore them and see my expertise in action!
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center pl-48 pr-10"> 
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
