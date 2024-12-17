import React, { useState } from 'react';
import './App.css';
import CFGDemo from './components/CFGDemo';
import { handleRunJar } from './components/RunJarButtons';
import ButtonDiv from './components/button';
import cfgimage from './assets/cfg.png';
import dfaimage from './assets/dfa.png';
import pdaimage from './assets/pda.png';
import turingimage from './assets/turing.png';
import hanoiimage from './assets/toh.png';

function App() {
  const [currentView, setCurrentView] = useState('menu');

  const projects = [
    { name: 'DFA/NFA', imageSrc: dfaimage, isInternal: true, jarNumber: 1 },
    { name: 'CFG', imageSrc: cfgimage, isInternal: true },
    { name: 'PDA', imageSrc: pdaimage, link: 'https://pda-lemon.vercel.app/' },
    { name: 'TURING', imageSrc: turingimage, isInternal: true, jarNumber: 3 },
    { name: 'TOWER OF HANOI', imageSrc: hanoiimage, link: 'https://html-starter-tan-gamma.vercel.app/' },
  ];

  const handleClick = (project) => {
    if (project.isInternal) {
      if (project.jarNumber) {
        handleRunJar(project.jarNumber);
      } else {
        setCurrentView(project.name.toLowerCase());
      }
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

      {currentView === 'menu' ? (
        <div className="grid-container">
          {projects.map((project) => (
            <ButtonDiv
              key={project.name}
              imageSrc={project.imageSrc}
              type={project.name}
              link={project.link}
              handleClick={() => handleClick(project)}
              className={project.name === 'CFG' ? 'span-2' : ''}
            />
          ))}
        </div>
      ) : (
        <div>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </div>
  );
}

export default App;