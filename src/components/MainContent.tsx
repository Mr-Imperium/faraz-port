import React from 'react';
import Navigation from './Navigation';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';

const MainContent = () => {
  return (
    <main className="ml-[40%] flex-1 min-h-screen overflow-y-auto">
      <Navigation />
      <div className="p-8 pt-4">
        <div className="max-w-3xl mx-auto space-y-16">
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="education">
            <Education />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;