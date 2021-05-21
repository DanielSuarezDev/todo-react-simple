import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "../styles/mobile.css";
import { useForm } from "../hooks/useForm";
import { TodoList } from "./TodoList";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: "toggle",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("nueva tarea");

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
    reset();
  };

  return (
    <>
      <div className="container">
        <h1 className="title">
          Tus Tareas <small>({todos.length})</small>
        </h1>

        <div className="">
          <div className="form">
            {/* <h4 className='form-title'>Agregar tu tarea...</h4>  */}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-input"
                name="description"
                placeholder="Agrega tu tarea..."
                autoComplete="off"
                value={description}
                onChange={handleInputChange}
              />

              <button className="form-submit" type="submit">
                Agregar
              </button>
            </form>
          </div>
        </div>

        <h2>{todos.desc}</h2>
      </div>

      <div className="contain-todo">
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      </div>
    </>
  );
};
