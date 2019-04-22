import React from "react";
import { connect } from "react-redux";

import { toggleTodo } from "../store/action-creators";

const TodoItem = ({ toggleTodo, todo }) => (
  <li
    className={todo.completed ? "completed" : ""}
    onClick={() => toggleTodo(todo.id)}
  >
    {todo.title}
  </li>
);

const mapDispatchToProps = {
  toggleTodo
};
const connectToStore = connect(
  null,
  mapDispatchToProps
);

export default connectToStore(TodoItem);
