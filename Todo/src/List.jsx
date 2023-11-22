import React from "react";

function List({ todos, handleCheckboxChange }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleCheckboxChange(index)}
          />
          {todo.task}
        </li>
      ))}
    </ul>
  );
}

export default List;
