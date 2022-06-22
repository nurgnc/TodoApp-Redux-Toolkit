import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  destroy,
  selectFilteredTodos,
  getTodosAsync,
} from "../redux/todos/todoSlice";
import Loading from "./Loading";
import Error from "./Error";

const TodoList = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroy(id));
    }
  };

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              onClick={() => handleDestroy(item.id)}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
