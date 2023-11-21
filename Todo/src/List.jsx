import React from 'react';
import Checkbox from './Checkbox';

const List = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <Checkbox />
          {todo}
        </li>
      ))}
    </ul>
  );
};

export default List;