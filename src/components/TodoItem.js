import React, { Component } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import './TodoItem.css';
class TodoItem extends Component {
  render() {
    const { item, onCheck, onDelete } = this.props;
    let className = 'TodoItem';
    if (item.isComplete) {
      className += ' TodoItem-complete';
    }
    return (
      <div className={className}>
        <p onClick={onCheck}>{item.title}</p>
        <AiOutlineDelete className="delete-icon" onClick={onDelete} />
      </div>
    );
  }
}
export default TodoItem;
