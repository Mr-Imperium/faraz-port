import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-purple-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Faraz Shamim. All rights reserved.
          </p>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;