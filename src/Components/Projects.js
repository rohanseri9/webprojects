import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const projectIcons = [FaCode, FaPaintBrush, FaMobileAlt];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section id="projects" className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-10 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center text-white">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = projectIcons[index % projectIcons.length];
            return (
              <motion.div
                key={project.id}
                className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="text-5xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-center">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
