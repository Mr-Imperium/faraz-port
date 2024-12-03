import React from 'react';
import { Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'CTO & Founder',
    company: 'MyStartup',
    period: '2022 - Present',
    description: [
      'Led the development of an innovative AI-powered CRM platform.',
      'Managed a team of developers, fostering a culture of innovation.',
      'Implemented machine learning algorithms for predictive analytics.'
    ],
    skills: [
      { name: 'React', color: 'bg-cyan-600' },
      { name: 'Python', color: 'bg-blue-500' },
      { name: 'AWS', color: 'bg-orange-600' }
    ]
  }
];

const Experience = () => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.title} className="border border-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Building2 className="text-gray-400 mr-3" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                <p className="text-gray-400 text-sm">{exp.company} • {exp.period}</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 mb-4">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span key={skill.name} className={`px-2 py-1 text-xs rounded-full ${skill.color} text-white`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;