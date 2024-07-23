import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Seri Pvt Ltd</h1>
        <div>
          <NavLink to="/" className="text-white mx-2" activeClassName="font-bold" end>Home</NavLink>
          <NavLink to="/services" className="text-white mx-2" activeClassName="font-bold">Services</NavLink>
          <NavLink to="/projects" className="text-white mx-2" activeClassName="font-bold">Projects</NavLink>
          <NavLink to="/contact" className="text-white mx-2" activeClassName="font-bold">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
