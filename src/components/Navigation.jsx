import React from 'react';

function Navigation({ onBack }) {
  return (
    <div className="navigation-bar">
      <button className="back-button" onClick={onBack}>
        ← Back to Menu
      </button>
    </div>
  );
}

export default Navigation;