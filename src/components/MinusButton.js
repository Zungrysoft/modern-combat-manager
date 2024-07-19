import React from 'react';

function MinusButton({ onClick, width, tooltip }) {
  return (
    <button
      className="circle-button"
      onClick={onClick}
      style={{ width: width, height: width }}
      title={tooltip}
    >
      <span className="icon minus"></span>
    </button>
  );
}

export default MinusButton;
