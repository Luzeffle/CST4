import React from 'react';

export default function ButtonDiv({ type, imageSrc, handleClick }) {
    return (
      <div className="grid-item" onClick={handleClick}>
        {imageSrc && <img src={imageSrc} alt={'${type} icon'} className="button-image" />}
        <h2>{type}</h2>
      </div>
    );
  };
  
