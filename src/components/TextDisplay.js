import React from 'react';

function TextDisplay({ text, width, backgroundColor }) {
  return (
    <p
      className="text-input"
      style={{ width: width, backgroundColor: backgroundColor }}
    >{text}</p>
  );
}

export default TextDisplay;
