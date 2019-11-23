import React from 'react';

class TodoInput extends React.Component<any,any> {
  handleKeyPress = (e) => {
    const key = e.key;
    const value = e.target.value;
    if (key === 'Enter') {
      e.target.value = '';
      this.props.onTodoItemAdded(value);
    }
  }

  render() {
    return (
      <input type="text" onKeyPress={this.handleKeyPress} />
    )
  }
}

export default TodoInput;