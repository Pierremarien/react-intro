import React from 'react';

const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter your ToDo"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;