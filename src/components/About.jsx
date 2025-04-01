import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px]
            py-5 px-12 min-h-[280px] flex
            justify-evenly items-center flex-col"
          >
              <img src={icon} alt={title}
              className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[20px]
              font-bold text-center">{title}</h3>
          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubtext}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6.5xl leading-[30px] text-justify"
      >
        I am a passionate and skilled IT professional with a background in IT support and specialization as an IT Specialist. With hands-on experience in troubleshooting and maintaining IT systems, I have developed a strong foundation in technology management. My expertise also extends to web development, where I am proficient in PHP and various web technologies. As an IT Support Intern, I gained valuable experience in providing technical assistance and resolving complex issues, and as an IT Specialist, I honed my skills in system management, ensuring seamless IT operations. In addition to my technical expertise, I am committed to staying updated with the latest advancements in web development, continuously improving my skill set in PHP and other programming languages. I am passionate about delivering high-quality digital solutions and am excited to bring my knowledge and experience to new challenges.        
      </motion.p> 

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
          {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")