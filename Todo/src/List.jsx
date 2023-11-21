import React, { useState } from "react";

function List() {
  const initialTodos = ["To Do 1", "To Do 2"];
  const [todos, setTodos] = useState(initialTodos);

  const [checkedTodos, setCheckedTodos] = useState([]);

  const handleCheckboxChange = (index) => {
    const updatedCheckedTodos = [...checkedTodos];
    updatedCheckedTodos[index] = !updatedCheckedTodos[index];
    setCheckedTodos(updatedCheckedTodos);
  };
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={checkedTodos[index] || false}
            onChange={() => handleCheckboxChange(index)}
          />
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default List;
