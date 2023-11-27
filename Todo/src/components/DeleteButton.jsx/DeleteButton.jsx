import React from "react";
import "./DeleteButton.scss";

function DeleteButton({ onDeleteCheckedTodos }) {
  return (
    <button onClick={onDeleteCheckedTodos}>
      Delete Completed Tasks
    </button>
  );
}

export default DeleteButton;
