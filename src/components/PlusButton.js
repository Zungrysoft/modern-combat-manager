import React from 'react';

function PlusButton({ onClick, width, tooltip }) {
  return (
    <button
      className="circle-button"
      onClick={onClick}
      style={{ width: width, height: width }}
      title={tooltip}
    >
      <span className="icon plus"></span>
    </button>
  );
}

export default PlusButton;
