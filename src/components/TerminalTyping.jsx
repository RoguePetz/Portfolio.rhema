import React, { useState, useEffect } from "react";

const TerminalTyping = ({
  fullText = "Hello World", // Default text
  typingSpeed = 100, // Typing speed in milliseconds
  cursor = true, // Show or hide cursor
  cursorBlinkSpeed = 1, // Cursor blink speed in seconds
  repeat = true, // Allow the typing animation to repeat
  delayBeforeRepeat = 2000 // Delay before repeating the typing animation
}) => {
  const [text, setText] = useState(""); // State to store the typed text
  const [isTyping, setIsTyping] = useState(true); // State to track if typing is in progress

  useEffect(() => {
    if (!fullText) return; // Avoid any undefined text input

    let index = 0;
    let interval;

    // Start typing the text character by character
    if (isTyping) {
      interval = setInterval(() => {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        if (index === fullText.length) {
          clearInterval(interval); // Stop when done typing
          if (repeat) {
            setIsTyping(false); // Indicate typing is complete
          }
        }
      }, typingSpeed);
    }

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isTyping, fullText, typingSpeed, repeat]);

  useEffect(() => {
    // If repeat is true, reset the text after a delay and start typing again
    if (!isTyping && repeat) {
      const timeout = setTimeout(() => {
        setText(""); // Reset the text
        setIsTyping(true); // Start typing again
      }, delayBeforeRepeat);

      return () => clearTimeout(timeout); // Clean up the timeout on component unmount
    }
  }, [isTyping, repeat, delayBeforeRepeat]);

  return (
    <div className="terminal">
      <span className="text-[#00ff00]">{text}</span>
      {cursor && <span className="cursor" style={{ animationDuration: `${cursorBlinkSpeed}s` }}>|</span>}
    </div>
  );
};

export default TerminalTyping;