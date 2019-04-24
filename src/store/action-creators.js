import { SET_TODOS, TOGGLE_TODO, FETCH_TODOS, FETCH_TODOS_FAILED } from "./action-types";

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

export const fetchTodos = () => ({
  type: FETCH_TODOS
});

export const fetchTodosFailed = error => ({
  type: FETCH_TODOS_FAILED,
  payload: error
});
