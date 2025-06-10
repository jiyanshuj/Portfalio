import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      icon: <Github size={48} />,
      title: 'GitHub',
      subtitle: 'Check out my code',
      link: 'https://github.com/jiyanshuj',
      color: 'hover:text-gray-800 dark:hover:text-white',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      icon: <Mail size={48} />,
      title: 'Email',
      subtitle: 'Let\'s get in touch',
      link: 'mailto:jiyanshujain321@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
      bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/20'
    },
    {
      icon: <Linkedin size={48} />,
      title: 'LinkedIn',
      subtitle: 'Connect with me',
      link: 'https://www.linkedin.com/in/jiyanshu-jain',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      } 
    },
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            I enjoy working on new projects and building useful solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            className={`group flex flex-col items-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg transition-all duration-300 ${social.bgColor} min-w-[200px]`}
            >
              <div className={`mb-4 text-gray-600 dark:text-gray-400 transition-colors duration-300 ${social.color}`}>
                {social.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform">
                {social.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {social.subtitle}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100 dark:border-gray-700">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="mb-4"
            >
              <Heart size={40} className="text-red-500 mx-auto" />
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              Thank You!
            </h3>
            <motion.div
              className="mt-6 flex justify-center"
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <span className="text-4xl">🚀</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
