import React from 'react';
import './App.css';

function App() {
  const handleClick = (project) => {
    switch(project) {
      case 'DFA/NFA':
        window.open('https://example.com/dfa-nfa', '_blank');
        break;
      case 'PDA':
        window.open('https://example.com/pda', '_blank');
        break;
      case 'CFG':
        window.open('https://example.com/cfg', '_blank');
        break;
      case 'TURING':
        window.open('https://example.com/turing', '_blank');
        break;
      case 'HANOI':
        window.open('https://example.com/hanoi', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>CS PROFESSIONAL TRACK</h1>
        <p>CST FINAL PROJECT</p>
      </div>
      <div className="grid-container">
        <div className="grid-item" onClick={() => handleClick('DFA/NFA')}>
          <h2>DFA/NFA</h2>
        </div>
        <div className="grid-item" onClick={() => handleClick('PDA')}>
          <h2>PDA</h2>
        </div>
        <div className="grid-item" onClick={() => handleClick('CFG')}>
          <h2>CFG</h2>
        </div>
        <div className="grid-item" onClick={() => handleClick('TURING')}>
          <h2>TURING MACHINE</h2>
        </div>
        <div className="grid-item" onClick={() => handleClick('HANOI')}>
          <h2>TOWER OF HANOI</h2>
        </div>
      </div>
    </div>
  );
}

export default App;