import React from 'react';

import TodoItem from './TodoItem';

export default class TodoList extends React.Component<any,any> {
  render() {
    const { todos, onTodoItemRemoved, onTodoItemToggled } = this.props;
    return (
      <div className="TodoList">
        {
          todos.length > 0
            ? todos.map((todo) => (
              <TodoItem
                key={todo.id}
                onTodoItemRemoved={onTodoItemRemoved}
                onTodoItemToggled={onTodoItemToggled}
                {...todo} />
            ))
            : '할 일이 없습니다.'
        }
      </div>
    )
  }
}
