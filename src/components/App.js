import React, { Component } from "react";
import { connect } from "react-redux";
import { setTodos, fetchTodos } from "../store/action-creators";
import * as selectors from "../store/selectors";
import TodoItem from "./TodoItem";

import "./App.css";

class App extends Component {
  state = {
    filter: ""
  };

  changeFilter = text => {
    this.setState({ filter: text });
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { filter } = this.state;
    const { todos } = this.props;

    const filteredTodos =
      filter.trim().length === 0
        ? Object.values(todos)
        : Object.values(todos).filter(todo => todo.title.includes(filter));

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
          <ul className="todos">
            {filteredTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo}></TodoItem>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => ({
  todos: selectors.getOrderedTodos(store)
});

// const mapDispatchToProps = (dispatch) => ({
//   generateRandom: () => {
//     const randomNum = Math.random();
//     return dispatch(setDummyRandom(randomNum));
//   }
// });
const mapDispatchToProps = {
  setTodos,
  fetchTodos
};

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectToStore(App);
