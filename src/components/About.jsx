import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Overview</p>
        <h2 className={styles.sectionHeadText}>ABOUT ME</h2>
      </motion.div>
      <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-3 text-secondary text-[26px] max-w-none w-full leading-[30px]'
>
<div className="space-y-4">
  <div className="flex items-center">
    <span className="text-xl mr-2">•</span> With 3 years of Experience, I specialize in creating high-performance websites.
  </div>
  <div className="flex items-center">
    <span className="text-xl mr-2">•</span> Passionate about crafting scalable, intuitive, and seamless user experiences.
  </div>
  <div className="flex items-center">
    <span className="text-xl mr-2">•</span> Constantly refining skills for clean, optimized and maintainable code.
  </div>
  <div className="flex items-center">
    <span className="text-xl mr-2">•</span> Currently seeking new opportunities and jobs to channel my skills.
  </div>
  <div className="flex items-center">
    <span className="text-xl mr-2">•</span> These are the areas I’m passionate about and highly skilled in :
  </div>
</div>

</motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
