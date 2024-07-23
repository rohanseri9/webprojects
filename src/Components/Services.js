import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaCloud } from 'react-icons/fa';

const serviceIcons = [FaLaptopCode, FaMobileAlt, FaCloud];

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
    <section id="services" className="bg-gradient-to-r from-green-300 via-white-300 to-yellow-300 p-10">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <motion.div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="text-5xl text-blue-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
