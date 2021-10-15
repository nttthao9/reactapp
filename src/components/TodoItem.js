import React, { Component } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import './TodoItem.css';
class TodoItem extends Component {
  render() {
    const { item } = this.props;
    let className = 'TodoItem';
    if (item.isComplete) {
      className += ' TodoItem-complete';
    }
    return (
      <div className={className}>
        <input type="checkbox" className="checkbox" />
        <p>{item.title}</p>
        <AiOutlineDelete className="delete-icon" />
      </div>
    );
  }
}
export default TodoItem;
