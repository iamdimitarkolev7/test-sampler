import React, { useState } from 'react';
import '../styles/input-text-field.css';

const InputTextField = ({ onInputChange }: any) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: any) => {
    const value = e.target.value
    setInputValue(value)
    onInputChange(value)
  };

  return (
    <textarea
      value={inputValue}
      onChange={handleChange}
      placeholder="Insert NestJS class here"
    />
  )
}

export default InputTextField;