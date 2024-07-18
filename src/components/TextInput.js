import React from 'react';

function TextInput({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      className="text-input"
      value={value}
      onChange={handleChange}
    />
  );
}

export default TextInput;
