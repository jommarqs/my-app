export const getTodos = store => store.todos;
export const getOrderedTodos = store => (
  Object.values(getTodos(store)).sort((t1, t2) => t1.id - t2.id)
);
