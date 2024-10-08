// Header Component (sticky below the navigation)
import React from 'react';
import { NavLink } from 'react-router-dom';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="  bg-primary text-white py-6 z-40">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <nav className="text-gray-400">
          <NavLink to="/home" className="hover:text-white">Home</NavLink>
          <span className="mx-2">/</span>
          <span>{breadcrumb}</span>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
