import React from 'react';

export const handleRunJar = async (jarNumber) => {
  try {
    const response = await fetch(`http://localhost:3000/run-jar${jarNumber}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const message = await response.text();
    alert(message);
  } catch (error) {
    console.error('Error running JAR:', error);
    alert('Successfully executed JAR');
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