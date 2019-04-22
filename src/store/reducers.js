import { combineReducers } from "redux";
import { SET_TODOS, TOGGLE_TODO } from "./actions";

const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.payload;
    case TOGGLE_TODO:
      const todoId = action.payload;
      const todo = state[todoId];

      return {
        ...state,
        [todoId]: { ...todo, completed: !todo.completed }
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;
