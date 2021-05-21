import React from "react";
import '../styles/mobile.css'

export const TodoListItem = ({todo,i,handleDelete,handleToggle}) => {
  return (
    <li key={todo.id} className="contain-list">
      <p className={`${todo.done && "complete"}`}>
        {i + 1}. {todo.desc}
      </p>

      <button
        className="button-delete"
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        borrar
      </button>
      <button
        className="button-complete"
        onClick={() => {
          handleToggle(todo.id);
        }}
      >
        {todo.done ? "deshacer" : "completar"}
      </button>
    </li>
  );
};
