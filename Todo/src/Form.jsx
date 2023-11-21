import React, { useRef } from "react";

function Form() {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;

    // Do something with inputElement...
    console.log(inputElement.value);
  }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your ToDo" />
      <button onClick={clickHandler}>Add it</button>
    </div>
  );
}

export default Form;
