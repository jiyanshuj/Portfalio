import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Brain, Activity, GraduationCap, FileText } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ReactNode;
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Skills Bridge Platform",
      description: "An AI-powered educational platform bridging the gap between academic learning and job skills. The platform features personalized learning paths, skill gap analysis, and industry collaboration portal.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      tags: ["AI", "Education", "Web Development"],
      features: [
        "AI-driven skill gap analysis",
        "Personalized learning paths",
        "Gamification features",
        "Industry collaboration portal",
        "Responsive design",
        "Resource library"
      ],
      technologies: [
        "React",
        "Node.js",
        "TensorFlow",
        "MongoDB",
        "Express",
        "AWS",
        "Docker"
      ],
      githubUrl: "https://github.com/jiyanshuj/project",
      liveUrl: "https://skillpulse.netlify.app/",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Health Guard AI",
      description: "A machine learning-powered web application designed to predict diseases like Diabetes, Heart Disease, and Parkinson's based on user input. Utilizes pre-trained models and Streamlit for an intuitive user experience.",
      image: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg",
      tags: ["Python", "Machine Learning", "Healthcare"],
      features: [
        "Disease Prediction",
        "Health Analysis",
        "Custom Navigation",
        "User Interface"
      ],
      technologies: [
        "Python",
        "Streamlit",
        "scikit-learn",
        "Pandas",
        "NumPy"
      ],
      githubUrl: "https://github.com/jiyanshuj/Health-Guard-AI",
      liveUrl: "https://health-guard-ai.streamlit.app/",
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Sustainable Travel Planner",
      description: "An eco-friendly travel planning application that helps users make environmentally conscious travel decisions. Developed during Hack Wave Hackathon.",
      image: "https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg",
      tags: ["Python", "Web Development", "Sustainability"],
      features: [
        "Carbon footprint calculation",
        "Eco-friendly routes",
        "Impact tracking"
      ],
      technologies: [
        "Python",
        "Django",
        "JavaScript",
        "HTML/CSS",
        "APIs"
      ],
      githubUrl: "https://github.com/jiyanshuj/Errror-404-v1-",
      icon: <Activity className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Resume Gen",
      description: "A full-stack web application for generating professional resumes with a modern tech stack. Features include dynamic form handling, real-time preview, and document generation.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
      tags: ["TypeScript", "Python", "Full Stack"],
      features: [
        "Dynamic form handling",
        "Real-time preview",
        "Document generation",
        "Responsive design",
        "Type safety",
        "Modern UI/UX"
      ],
      technologies: [
        "React",
        "TypeScript",
        "Flask",
        "Tailwind CSS",
        "PostgreSQL",
        "Python-docx"
      ],
      githubUrl: "https://github.com/jiyanshuj/Resume-Gen",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  // Updated filters
  const filters = ['All', 'Web Apps', 'AI/ML', 'APIs'];

  // Updated filter logic
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => {
        if (activeFilter === 'Web Apps') {
          return ['Web Development', 'Full Stack', 'TypeScript'].some(tag => project.tags.includes(tag));
        }
        if (activeFilter === 'AI/ML') {
          return ['AI', 'Machine Learning', 'Python', 'Healthcare', 'Education'].some(tag => project.tags.includes(tag));
        }
        if (activeFilter === 'APIs') {
          return project.technologies.includes('APIs');
        }
        return false;
      });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8">
            Here are some of my notable projects that showcase my skills in machine learning, web development, and problem-solving.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-800 dark:text-gray-200 dark:hover:bg-dark-700'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-white/90 text-gray-900 rounded text-sm font-medium hover:bg-white transition-colors"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-blue-500/90 text-white rounded text-sm font-medium hover:bg-blue-500 transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-blue-600">
                {project.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
