import React from 'react';

function TextInput({ value, placeholder, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      className="text-input"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default TextInput;
