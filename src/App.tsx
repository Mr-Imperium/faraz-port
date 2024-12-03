import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex min-h-screen bg-black text-gray-300">
      <div className="w-[40%] fixed">
        <Sidebar />
      </div>
      <MainContent />
    </div>
  );
}

export default App;