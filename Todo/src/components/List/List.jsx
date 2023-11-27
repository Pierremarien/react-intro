import React from "react";
import "./list.scss"

function List({ todos, handleCheckboxChange }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} title={todo.task}>
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
