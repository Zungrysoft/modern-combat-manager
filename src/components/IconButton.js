import React from 'react';

function IconButton({ onClick, width, icon, tooltip }) {
  return (
    <button
      className="circle-button"
      title={tooltip}
      onClick={onClick}
      style={{ width: width, height: width }}
    >
      <img src={`images/${icon}.png`} className="button-image"/>
    </button>
  );
}

export default IconButton;
