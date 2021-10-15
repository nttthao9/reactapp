import React, { Component } from 'react';
import {
  AiOutlinePlusCircle,
  AiOutlineCheck,
  AiOutlineClose,
} from 'react-icons/ai';
import './TodoCreate.css';
class TodoCreate extends Component {
  render() {
    return (
      <div className="createTodo">
        <AiOutlinePlusCircle className="btn plus" />
        <div className="task">
          <input type="text" className="inputText" />
          <div className="decisionBtn">
            <AiOutlineCheck className="btn check" />
            <AiOutlineClose className="btn close" />
          </div>
        </div>
      </div>
    );
  }
}
export default TodoCreate;
