import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 p-10 min-h-screen flex items-center justify-center">
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 
          className="text-6xl font-extrabold mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Seri Pvt Ltd
        </motion.h2>
        <p className="text-2xl mb-8">We offer the best software solutions for your business.</p>
        <motion.a 
          href="#services" 
          className="bg-white text-blue-500 py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
