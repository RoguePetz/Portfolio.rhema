import React, { useEffect, useState } from 'react';

function MatrixTextChanger({ texts, glitchChance = 0.1, intervalSpeed = 100, changeTextInterval = 3000 }) {
  const [matrixText, setMatrixText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Function to generate a random character (for glitch effect)
  const getRandomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{}|;:,.<>?';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  useEffect(() => {
    let interval;
    let displayText = '';

    // Change content periodically based on the changeTextInterval
    const changeText = () => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const glitchInterval = setInterval(() => {
      // Display the current text and glitch some characters randomly
      displayText = texts[currentTextIndex]
        .split('')
        .map((char) => (Math.random() < glitchChance ? getRandomChar() : char))
        .join('');
      setMatrixText(displayText);
    }, intervalSpeed);

    const textChangeInterval = setInterval(changeText, changeTextInterval);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(textChangeInterval); // Cleanup intervals on unmount
    };
  }, [texts, currentTextIndex, glitchChance, intervalSpeed, changeTextInterval]);

  return <div className="matrix-glitch-text">{matrixText}</div>;
}

export default MatrixTextChanger;
