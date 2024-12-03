import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400 glow-text">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 bg-gray-900 border border-purple-500 rounded-lg
                         text-white focus:outline-none focus:border-purple-400 glow-input"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-gray-900 border border-purple-500 rounded-lg
                         text-white focus:outline-none focus:border-purple-400 glow-input"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 border border-purple-500 rounded-lg
                         text-white focus:outline-none focus:border-purple-400 glow-input"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg
                       hover:bg-purple-700 transition-all duration-300 glow-button"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;