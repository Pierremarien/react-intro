import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import SecondTitle from "./SecondTitle";
import DeleteButton from "./DeleteButton";

const LSKEY = "MyTodoApp";

function Todoapp() {
    const initialExampleTodos = [
        { task: "Bisou Tom", checked: true },
        { task: "Sortir Bebou", checked: false },
        { task: "Manger au parc", checked: false },
      ];
      
      const [initialTodos, setInitialTodos] = useState(true)
    
      const [userTodos, setUserTodos] = useState(() => {
        const storedTodos =
          JSON.parse(window.localStorage.getItem(LSKEY + ".todos")) || [];
        return storedTodos;
      });
    
      const handleCheckboxChange = (index) => {
        const updatedTodos = [...userTodos];
        updatedTodos[index].checked = !updatedTodos[index].checked;
        setUserTodos(updatedTodos);
      };
    
      useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(userTodos));
      }, [userTodos]);
    
      const handleAddTodo = (newTodo) => {
        setInitialTodos(false);
        setUserTodos((prevUserTodos) => [...prevUserTodos, newTodo]);
      };
    
      const handleDeleteCheckedTodos = () => {
        const remainingTodos = userTodos.filter((todo) => !todo.checked);
        setUserTodos(remainingTodos);
      };
}
