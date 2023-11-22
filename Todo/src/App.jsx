import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import MainTitle from "./MainTitle";
import SecondTitle from "./SecondTitle";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  };
  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <div>
      <MainTitle />
      <Form onAddTodo={handleAddTodo} />
      <SecondTitle />
      <List todos={todos} handleCheckboxChange={handleCheckboxChange} />
    </div>
  );
}

export default App;
