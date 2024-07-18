import React from 'react';

function RoundedButton({ text, onClick }) {
  return (
    <button className="rounded-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default RoundedButton;
