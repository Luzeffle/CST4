import React from 'react';

export default function ButtonDiv({ type, handleClick }) {
    return (
      <div className="grid-item" onClick={handleClick}>
        <h2>{type}</h2>
      </div>
    );
  };
  
