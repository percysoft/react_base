import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class TodoApp extends React.Component<any,any> {

  handleTodoItemAdded = title => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat([{
          id: new Date().getTime(),
          title,
          complete: false
        }])
      }
    })
  }

  handleTodoItemRemoved = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(item => {
          return item.id !== id
        })
      }
    })
  }

  handleTodoItemToggled = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(item => (
          item.id === id
            ? { ...item, complete: !item.complete }
            : item
        ))
      }
    })
  }

  state = {
    todos: [
      {
        id: new Date().getTime(),
        title: 'My Todo',
        complete: false
      }
    ]
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="TodoApp">
        <TodoInput onTodoItemAdded={this.handleTodoItemAdded} />
        <TodoList
          todos={todos}
          onTodoItemToggled={this.handleTodoItemToggled}
          onTodoItemRemoved={this.handleTodoItemRemoved} />
      </div>
    );
  }
}