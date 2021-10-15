import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoHeader from './components/TodoHeader';
import TodoCreate from './components/TodoCreate';
class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Học react', isComplete: false },
      { title: 'Nấu cơm', isComplete: false },
      { title: 'Quét nhà', isComplete: false },
    ];
  }
  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoCreate />
        {this.todoItems.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default App;
