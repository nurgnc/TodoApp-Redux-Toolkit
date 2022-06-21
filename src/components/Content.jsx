import React from "react";
import TodoList from "./TodoList";

const Content = () => {
  return (
    <section className="main">
      <input type="checkbox" className="toggle-all" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList />
    </section>
  );
};

export default Content;
