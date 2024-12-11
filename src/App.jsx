import React, { useState } from 'react';
import './App.css';
import ButtonDiv from '../src/components/button';

function App() {
  const [projects] = useState({
    "DFA/NFA": "https://bolt.new/~/vitejs-vite-ahzmytnm",
    "PDA": "https://chatgpt.com/c/67592b76-9f3c-800f-88ec-bc93a8de6ce4",
    "CFG": "https://github.com/Luzeffle/CST4/tree/main/src/assets",
    "TURING": "https://example.com/turing",
    "HANOI": "https://example.com/hanoi",
  });

  return (
    <div className="app">
      <div className="header">
        <h1>CS PROFESSIONAL TRACK</h1>
        <p>CST FINAL PROJECT</p>
      </div>
      <div className="grid-container">
        {Object.keys(projects).map((project) => (
          <ButtonDiv
            key={project}
            type={project}
            handleClick={() => window.open(projects[project], '_blank')}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
