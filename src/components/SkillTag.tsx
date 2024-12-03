import React from 'react';

interface SkillTagProps {
  name: string;
  color: string;
}

const SkillTag = ({ name, color }: SkillTagProps) => {
  return (
    <span className={`px-3 py-1 text-sm rounded-full ${color} text-white`}>
      {name}
    </span>
  );
};

export default SkillTag;