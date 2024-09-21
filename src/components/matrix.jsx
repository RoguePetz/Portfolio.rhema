import React, { useEffect, useState } from 'react';

function MatrixText({ text, intervalSpeed = 100 }) {
  const [matrixText, setMatrixText] = useState('');

  // Function to generate random character (for matrix effect)
  const getRandomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{}|;:,.<>?';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  useEffect(() => {
    let interval;
    let displayText = '';
    let index = 0;

    interval = setInterval(() => {
      // Randomize some characters before the final text
      const randomChars = Array(text.length)
        .fill(0)
        .map(() => getRandomChar())
        .join('');

      // Slowly reveal the final text
      if (index <= text.length) {
        displayText = text.slice(0, index);
        index++;
      }
      setMatrixText(displayText + randomChars.slice(index));

      // Stop when the text is fully revealed
      if (index === text.length + 1) {
        clearInterval(interval);
      }
    }, intervalSpeed);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [text, intervalSpeed]);

  return <div className="matrix-text">{matrixText}</div>;
}

export default MatrixText;
