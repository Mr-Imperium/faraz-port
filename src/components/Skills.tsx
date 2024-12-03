import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', color: 'bg-blue-700' },
      { name: 'Java', color: 'bg-blue-700' },
      { name: 'C++', color: 'bg-blue-700' },
      { name: 'HTML', color: 'bg-blue-700' },
      { name: 'CSS', color: 'bg-blue-700' },
      { name: 'Human Languages', color: 'bg-blue-700' }
    ]
  },
  {
    title: 'Libraries',
    skills: [
      { name: 'Pandas', color: 'bg-green-700' },
      { name: 'Numpy', color: 'bg-green-700' },
      { name: 'Tensorflow', color: 'bg-green-700' },
      { name: 'Keras', color: 'bg-green-700' },
      { name: 'OpenCV', color: 'bg-green-700' },
      { name: 'Matplotlib', color: 'bg-green-700' },
      { name: 'PyTorch', color: 'bg-green-700' },
      { name: 'Lightning', color: 'bg-green-700' },
      { name: 'LangChain', color: 'bg-green-700' },
      { name: 'Huggingface', color: 'bg-green-700' },
      { name: 'Scikit-Learn', color: 'bg-green-700' },
      { name: 'XGBoost', color: 'bg-green-700' }
    ]
  },
  {
    title: 'Software & Tools',
    skills: [
      { name: 'Jupyter Notebook', color: 'bg-red-500' },
      { name: 'Google Colab', color: 'bg-red-500' },
      { name: 'VS Code', color: 'bg-red-500' },
      { name: 'GitHub', color: 'bg-red-500' },
      { name: 'Streamlit', color: 'bg-red-500' }
    ]
  }
];

const Skills = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h3 className="text-white font-semibold">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1 text-sm ${skill.color} text-white rounded-full`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;