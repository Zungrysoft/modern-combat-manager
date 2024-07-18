import React from 'react';

function SquareButton({ text, color, onClick }) {
  const darkerShade = darkenColor(color, 0.2); // Darken the color by 20%

  return (
    <button className="square-button" style={{ '--color': color, '--darker-color': darkerShade }} onClick={onClick}>
      {text}
    </button>
  );
}

// Function to darken a color
function darkenColor(color, amount) {
  const [r, g, b] = color.match(/\w\w/g).map((c) => parseInt(c, 16));
  return (
    '#' +
    [r, g, b]
      .map((c) => {
        const newColor = Math.max(0, Math.min(255, Math.floor(c * (1 - amount))));
        return newColor.toString(16).padStart(2, '0');
      })
      .join('')
  );
}

export default SquareButton;
