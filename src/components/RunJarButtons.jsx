// filepath: /c:/Users/HONEY/OneDrive/OneDrive - umindanao.edu.ph/Desktop/Codes/project/src/components/RunJarButtons.jsx
import React from 'react';

export const handleRunJar = async (jarNumber) => {
  try {
    const response = await fetch(`http://localhost:3000/run-jar${jarNumber}`);
    const message = await response.text();
    alert(message);
  } catch (error) {
    console.error('Error running JAR:', error);
    alert('Error running JAR');
  }
};

function RunJarButtons({ jarNumber }) {
  return (
    <div>
      <button onClick={() => handleRunJar(jarNumber)}>Run JAR {jarNumber}</button>
    </div>
  );
}

export default RunJarButtons;