import React from 'react';

function TextInput({ value, placeholder, onChange, width }) {
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
      style={{ width: width }}
    />
  );
}

export default TextInput;
