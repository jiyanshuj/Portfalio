import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Calendar } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "Microsoft Learn Certified",
    issuer: "Microsoft",
    description: "Developed expertise in AI workloads, machine learning, Computer Vision, NLP, and generative AI on Azure. Completed 30+ modules and 40+ hours of coursework.",
    date: "2024",
    credentialUrl: "",
    icon: <Award size={20} />,
  },
  {
    id: 2,
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    description: "Completed a 12-week intensive course, mastering Python fundamentals, algorithms, data analysis, and real-world applications.",
    date: "2023",
    credentialUrl: "",
    icon: <Code size={20} />,
  },
  {
    id: 3,
    title: "Technical Quiz Organizer",
    issuer: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
    description: "Led the organization of a campus-wide technical quiz, fostering knowledge-sharing and technical skill development.",
    date: "June 2024",
    credentialUrl: "",
    icon: <Award size={20} />,
  },
  {
    id: 4,
    title: "Hack Wave Hackathon Finalist",
    issuer: "Chameli Devi Group of Institutions",
    description: "Advanced to the final round with Sustainable Travel Planner. Demonstrated innovation and sustainability-focused development.",
    date: "April 2024",
    credentialUrl: "",
    icon: <Award size={20} />,
  }
];

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Certifications & Achievements
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
          >
            A showcase of my professional certifications and notable achievements in the tech industry.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-12"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-16`}
              >
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                        {cert.icon}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{cert.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{cert.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{cert.description}</p>
                  </div>
                </motion.div>

                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Committed to staying at the forefront of technology through continuous education and hands-on experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
