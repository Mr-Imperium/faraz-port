import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-start space-y-4 mb-12">
      <div className="flex items-center space-x-4">
        <img
          src="https://github.com/Mr-Imperium/faraz.github.io/blob/main/Faraz.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-700"
        />
        <div>
          <h1 className="text-2xl font-bold text-white">Oskar Franti Glen</h1>
          <p className="text-gray-400">Full Stack Web Developer</p>
          <div className="flex items-center text-gray-400 text-sm mt-1">
            <MapPin size={14} className="mr-1" />
            <span>Melbourne, Australia</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-3">
        <a href="https://github.com" className="px-4 py-1 text-sm bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
          Resume
        </a>
        <div className="flex space-x-2">
          <a href="https://github.com" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;