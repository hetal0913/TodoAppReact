import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      {id:1 , content: "first todo item"},
      {id:2 , content: "second todo item"}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => { return todo.id !== id })
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
