import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  color: string;
}

interface ProjectProps {
  title: string;
  description: string;
  skills: Skill[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard = ({ title, description, skills, liveLink, githubLink }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-blue-900/30 rounded-lg p-6 space-y-4 hover:border-blue-500/50 transition-all duration-300"
    >
      <h3 className="text-lg font-semibold text-blue-300">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`px-3 py-1 text-sm ${skill.color} text-white rounded-full`}
          >
            {skill.name}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 pt-2">
        {githubLink && (
          <a
            href={githubLink}
            className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} className="mr-1" />
            View Code
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            className="flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;