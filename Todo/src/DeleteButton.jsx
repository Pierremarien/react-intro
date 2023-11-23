import React from "react";

function DeleteButton({ onDeleteCheckedTodos }) {
  return (
    <button onClick={onDeleteCheckedTodos}>
      Delete Completed Tasks
    </button>
  );
}

export default DeleteButton;
