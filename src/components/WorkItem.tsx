// WorkItem.jsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const WorkItem = ({ project, index, viewMode = "card" }) => {
  if (!project) {
    return null; 
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2 + (index * 0.1),
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const imageSrc = project.image || "https://via.placeholder.com/300?text=No+Image";

  // Card View
  if (viewMode === "card") {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      >
        <div className="relative overflow-hidden">
          <motion.img 
            variants={item}
            src={imageSrc} 
            alt={project.name || "Project"} 
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <motion.h2 
            variants={item}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {project.name || "Untitled Project"}
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-gray-600 dark:text-gray-300 mb-4 flex-grow"
          >
            {project.description || "No description available."}
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-wrap gap-2 mb-5"
          >
            {project.languages && project.languages.map((lang, langIndex) => (
              <span 
                key={langIndex} 
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full"
              >
                {lang}
              </span>
            ))}
            {(!project.languages || project.languages.length === 0) && (
              <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full">
                No languages specified
              </span>
            )}
          </motion.div>
          
          <motion.div 
            variants={item}
            className="flex gap-4 mt-auto"
          >
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <FaGithub className="text-lg" /> 
                <span>Code</span>
              </a>
            )}
            {project.preview && project.preview !== "#" && (
              <a 
                href={project.preview} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              >
                <FaExternalLinkAlt className="text-lg" /> 
                <span>Live Demo</span>
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    );
  }
  
  // List View
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-64 overflow-hidden">
          <motion.img 
            variants={item}
            src={imageSrc} 
            alt={project.name || "Project"} 
            className="w-full h-52 md:h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <motion.h2 
              variants={item}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0"
            >
              {project.name || "Untitled Project"}
            </motion.h2>
            
            <motion.div 
              variants={item}
              className="flex gap-4"
            >
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 dark:text-gray-300 flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <FaGithub className="text-lg" /> 
                  <span>Code</span>
                </a>
              )}
              {project.preview && project.preview !== "#" && (
                <a 
                  href={project.preview} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 dark:text-gray-300 flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                >
                  <FaExternalLinkAlt className="text-lg" /> 
                  <span>Live Demo</span>
                </a>
              )}
            </motion.div>
          </div>
          
          <motion.p 
            variants={item}
            className="text-gray-600 dark:text-gray-300 mb-4"
          >
            {project.description || "No description available."}
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-wrap gap-2 mt-auto"
          >
            {project.languages && project.languages.map((lang, langIndex) => (
              <span 
                key={langIndex} 
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full"
              >
                {lang}
              </span>
            ))}
            {(!project.languages || project.languages.length === 0) && (
              <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full">
                No languages specified
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkItem;