import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="space-y-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-2xl font-bold text-white"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="space-y-4 text-gray-300"
      >
        <p>
          I'm a dedicated medical student with a strong passion for innovation at the intersection of healthcare and technology. My expertise lies in leveraging machine learning and data science to solve complex medical challenges, craft predictive models, and drive advancements in patient care.
        </p>
        <p>
          My journey into technology began alongside my medical studies, where I developed a deep interest in programming and artificial intelligence. Over time, I've honed my skills in Python, SQL, and various AI frameworks, culminating in projects that address real-world problems, from disease detection using deep learning to interactive health applications.
        </p>
        <p>When I'm not coding or studying, you'll find me immersed in honing my soccer skills or exploring ways to integrate modern technology into traditional medicine. For me, every challenge is a chance to innovate and make a meaningful impact.</p>
      </motion.div>
    </section>
  );
};

export default About;