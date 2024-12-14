import React, { useState } from 'react';
import './App.css';
import CFGDemo from './components/CFGDemo';
import ButtonDiv from './components/button';
import cfgimage from './assets/cfg.png';
import dfaimage from './assets/dfa.png';
import pdaimage from './assets/pda.png';
import turingimage from './assets/turing.png';
import hanoiimage from './assets/toh.png';

function App() {
  const [currentView, setCurrentView] = useState('menu');

  const projects = [
    { name: 'DFA/NFA', imageSrc: dfaimage, url: 'https://bolt.new/~/vitejs-vite-ahzmytnm' },
    { name: 'PDA', imageSrc: pdaimage, url: 'https://chatgpt.com/c/67592b76-9f3c-800f-88ec-bc93a8de6ce4' },
    { name: 'CFG', imageSrc: cfgimage , isInternal: true },
    { name: 'TURING', imageSrc: turingimage, url: 'https://example.com/turing' },
    { name: 'TOWER OF HANOI', imageSrc: hanoiimage, url: 'https://example.com/hanoi' },
  ];

  const handleClick = (project) => {
    if (project.isInternal) {
      setCurrentView(project.name.toLowerCase());
    } else if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  const handleBack = () => setCurrentView('menu');

  if (currentView === 'cfg') {
    return <CFGDemo onBack={handleBack} />;
  }

  return (
    <div className="app">
      <header className="header">
        <h1>CS PROFESSIONAL TRACK</h1>
        <p>CST FINAL PROJECT</p>
      </header>

      <div className="grid-container">
        {projects.map((project) => (
          <ButtonDiv
            key={project.name}
            imageSrc={project.imageSrc}
            type={project.name}
            handleClick={() => handleClick(project)}
            className={project.name === 'CFG' ? 'span-2' : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default App;