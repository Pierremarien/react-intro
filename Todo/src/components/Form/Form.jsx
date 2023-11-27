import React, { useRef, useState } from "react";
import "./form.scss"

function Form({ onAddTodo }) {
  const inputRef = useRef();

  const clickHandler = () => {
    const inputElement = inputRef.current;
    const newTodo = { task: inputElement.value, checked: false };
    
    onAddTodo(newTodo);

    inputElement.value = '';
  };
  return (
    <div className="form">
      <input ref={inputRef} type="text" placeholder="Enter your ToDo" />
      <button onClick={clickHandler}>Add it</button>
    </div>
  );
}

export default Form;
