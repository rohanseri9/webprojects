import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-blue-400 via-purple-500 to-red-500 p-10 min-h-screen flex items-center justify-center text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 bg-black"></div>
      <div className="container mx-auto relative z-10 text-center">
        <motion.h2 
          className="text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <p className="text-xl mb-12">Feel free to reach out for any inquiries.</p>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg relative z-20">
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center border-b-2 border-blue-500 py-2">
              <FaEnvelope className="text-blue-500 mr-3" />
              <motion.input 
                type="email" 
                className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                placeholder="Email"
                whileFocus={{ scale: 1.05 }}
              />
            </div>
            <div className="flex items-center border-b-2 border-blue-500 py-2">
              <FaPhone className="text-blue-500 mr-3" />
              <motion.input 
                type="tel" 
                className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                placeholder="Phone Number"
                whileFocus={{ scale: 1.05 }}
              />
            </div>
            <div className="flex items-center border-b-2 border-blue-500 py-2">
              <FaMapMarkerAlt className="text-blue-500 mr-3" />
              <motion.textarea 
                className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                placeholder="Message"
                rows="2"
                whileFocus={{ scale: 1.05 }}
              ></motion.textarea>
            </div>
            <motion.button 
              type="submit" 
              className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition w-full"
              whileHover={{ scale: 1.1 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
        <div className="mt-12 flex justify-center space-x-8 text-xl">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white text-blue-500 p-4 rounded-full shadow-lg"
          >
            <FaEnvelope />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white text-blue-500 p-4 rounded-full shadow-lg"
          >
            <FaPhone />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-white text-blue-500 p-4 rounded-full shadow-lg"
          >
            <FaMapMarkerAlt />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
