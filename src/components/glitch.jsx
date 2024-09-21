import React, { useEffect, useState } from 'react';

function MatrixGlitchText({ text, glitchChance = 0.1, intervalSpeed = 100 }) {
  const [matrixText, setMatrixText] = useState('');

  // Function to generate a random number for glitch effect
  const getRandomChar = () => {
    const chars = '0123456789';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  useEffect(() => {
    let interval;
    let displayText = '';

    interval = setInterval(() => {
      // Slowly reveal the final text but glitch some characters with random numbers
      displayText = text
        .split('')
        .map((char) => (Math.random() < glitchChance ? getRandomChar() : char))
        .join('');

      setMatrixText(displayText);
    }, intervalSpeed);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [text, glitchChance, intervalSpeed]);

  return <h3 className="matrix-glitch-text py-3">{matrixText}</h3>;
}

export default MatrixGlitchText;
