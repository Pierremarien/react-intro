import React, { useState } from 'react';
import Input from './Input';
import List from './List';
import Button from './Button';
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState(['ToDo 1', 'ToDo 2', 'ToDo 3']);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div>
      <Input value={newTodo} onChange={handleInputChange} />
      <Button onClick={handleAddTodo} />
      <List todos={todos} />
    </div>
  )
}

export default App
