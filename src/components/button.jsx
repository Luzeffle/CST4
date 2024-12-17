import React from 'react';
import { handleRunJar } from './RunJarButtons';

export default function ButtonDiv({ type, imageSrc, jarNumber, link, handleClick }) {
  const onClick = () => {
    if (jarNumber !== null && jarNumber !== undefined) {
      handleRunJar(jarNumber);
    } else if (link) {
      window.open(link, '_blank');
    } else {
      handleClick();
    }
  };

  return (
    <div className="grid-item" onClick={onClick}>
      {imageSrc && <img src={imageSrc} alt={`${type} icon`} className="button-image" />}
      <h2>{type}</h2>
    </div>
  );
}