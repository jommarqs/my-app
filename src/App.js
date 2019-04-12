import React, { Component } from "react";
import "./App.css";
import { getTodos } from "./api";

class App extends Component {
  // state = {
  //   todos: {}
  // };
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      filter: ""
    };
  }

  toggleTodo(id) {
    const todo = this.state.todos[id];
    // const newTodo = Object.assign({}, todo, { completed: !todo.completed });
    // const newTodos = Object.assign({}, this.state.todos, { [id]: newTodo });
    // this.setState({ todos: newTodos });
    this.setState({
      todos: {
        ...this.state.todos,
        [id]: { ...todo, completed: !todo.completed }
      }
    });
  }

  changeFilter(text) {
    this.setState({ filter: text });
  }

  componentDidMount() {
    getTodos().then(todos => {
      const tdObj = todos.reduce(
        (acc, todo) => ({ ...acc, [todo.id]: todo }),
        {}
      );
      this.setState({ todos: tdObj });
    });
  }

  render() {
    const { todos, filter } = this.state;
    // const todos = this.state.todos;
    // const filter = this.state.filter;

    const filteredTodos =
      filter.trim().length === 0
        ? Object.values(todos)
        : Object.values(todos).filter( todo => todo.title.includes(filter) );

    const ordered = filteredTodos.sort((t1, t2) => t1.id - t2.id);

    return (
      <div className="App">
        <header className="App-header">
          <h1>ToDo App</h1>
        </header>
        <main className="main-container">
          <p>
            <input
              className="filter-todos"
              value={filter}
              onChange={({ target: { value } }) => this.changeFilter(value)}
              type="text"
            />
          </p>
          {ordered.map(todo => (
            <p
              key={todo.id}
              className={todo.completed ? "completed" : ""}
              onClick={() => this.toggleTodo(todo.id)}
            >
              {todo.title}
            </p>
          ))}
        </main>
      </div>
    );
  }
}

export default App;
