import React from 'react';

interface NavItemProps {
  title: string;
  targetId: string;
}

const NavItem = ({ title, targetId }: NavItemProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className="text-gray-400 hover:text-white transition-colors px-4 py-2"
    >
      {title}
    </button>
  );
};

const Navigation = () => {
  return (
    <nav className="sticky top-0 bg-black/80 backdrop-blur-sm py-2 mb-4 z-50">
      <div className="flex justify-center space-x-8">
        <NavItem title="About" targetId="about" />
        <NavItem title="Skills" targetId="skills" />
        <NavItem title="Projects" targetId="projects" />
        <NavItem title="Education" targetId="education" />
      </div>
    </nav>
  );
};

export default Navigation;