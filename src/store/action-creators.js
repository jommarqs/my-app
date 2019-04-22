import { SET_TODOS, TOGGLE_TODO } from "./actions";

export const setTodos = todos => {
  const todosObj = !Array.isArray(todos)
    ? todos
    : todos.reduce((acc, todo) => ({ ...acc, [todo.id]: todo }), {});

  return {
    type: SET_TODOS,
    payload: todosObj
  };
};

export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  payload: todoId
});
