import React from 'react';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="h-screen bg-[#000000] p-8 overflow-hidden">
      <div className="space-y-12">
        <div className="space-y-6">
          <div className="relative">
            <div className="w-72 h-72 mx-auto rounded-full overflow-hidden">
              <img
                src="Faraz.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Faraz Shamim</h1>
            <p className="text-white mt-2">Medical Student | ML Enthusiast</p>
            <div className="flex items-center justify-center text-gray-400 text-sm mt-2">
              <MapPin size={14} className="mr-1" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a 
              href="Faraz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
            >
              Resume
            </a>
            <a 
              href="Faraz.pdf"
              download
              className="p-2 bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 ml-1"
            >
              <Download size={20} />
            </a>
            <div className="flex space-x-4 ml-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;