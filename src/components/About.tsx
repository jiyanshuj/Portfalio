import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Award, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            I'm a passionate developer with a strong foundation in machine learning, web development, and software engineering.
            I love turning complex problems into elegant solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-dark-700 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Proficient in Python, machine learning, and web development. Experienced in building AI-powered applications and full-stack web solutions.
            </p>
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-dark-700 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Microsoft Learn Certified in AI workloads and machine learning. Completed intensive Python programming course with focus on practical applications.
            </p>
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-dark-700 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Currently pursuing Computer Science with specialization in AI and machine learning. Active participant in technical events and hackathons.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;