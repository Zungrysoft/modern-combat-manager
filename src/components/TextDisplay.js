import React from 'react';

function TextDisplay({ text, width }) {
  return (
    <p
      className="text-input"
      style={{ width: width }}
    >{text}</p>
  );
}

export default TextDisplay;
