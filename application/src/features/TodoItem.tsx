import React from 'react';
import classNames from 'classnames';

export default class TodoItem extends React.Component<any,any> {
  handleRemoveButtonClick = () => {
    const { onTodoItemRemoved, id } = this.props;
    onTodoItemRemoved(id);
  }

  handleTodoTitleClick = () => {
    const { onTodoItemToggled, id } = this.props;
    onTodoItemToggled(id);
  }

  render() {
    const { title, complete } = this.props;
    const titleClassName = classNames(
      'TodoItem__title',
      { 'TodoItem__title--complete': complete }
    );
    return (
      <div className="TodoItem">
        <div
          onClick={this.handleTodoTitleClick}
          className={titleClassName}
        >{title}</div>
        <div
          onClick={this.handleRemoveButtonClick}
          className="TodoItem__remove"
        >x</div>
      </div>
    );
  }
}
