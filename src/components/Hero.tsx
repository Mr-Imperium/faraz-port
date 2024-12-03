import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 glow-text">
            Faraz Shamim
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-purple-300 mb-8">
          Medical Student | Machine Learning Enthusiast
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold 
                   hover:bg-purple-700 transition-all duration-300 glow-button"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Projects
        </motion.button>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-purple-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;