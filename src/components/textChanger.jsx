import React, { useState, useEffect } from 'react';

const TextChanger = () => {
  const [text, setText] = useState('Hello, World!');
  const texts = ['Software Engineer', 'Game Developer', 'Web Developer'];
  const interval = 3000; // Change text every 3 seconds

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, interval);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
      <h3 className='leading-3 text-sky-500'>{text}</h3>
  );
};

export default TextChanger;
