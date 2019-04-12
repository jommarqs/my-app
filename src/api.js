// https://jsonplaceholder.typicode.com/todos

export const getTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(response =>
    response.json().then(d => d.filter(t => t.userId === 1))
  );
};
