import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'Học react', isComplete: false },
        { title: 'Giat do', isComplete: false },
        { title: 'Quét nhà', isComplete: false },
      ],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  onInputChange(e) {
    const newTask = e.target.value;
    this.setState({ newItem: newTask });
  }

  handleAdd() {
    const { newItem, todoItems } = this.state;
    this.setState({
      newItem: ' ',
      todoItems: [{ title: newItem, isComplete: false }, ...todoItems],
    });
  }

  ItemClicked = (item) => {
    return () => {
      const { todoItems } = this.state;
      const isComplete = todoItems.isComplete;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  };
  ItemDeleted(item) {
    return () => {
      const { todoItems } = this.state;
      const newtodoItems = todoItems.filter((todo) => todo !== item);
      console.log(newtodoItems);
      this.setState({
        todoItems: newtodoItems,
      });
    };
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        <div>Todo Tasks</div>
        <input className="input-task" onChange={this.onInputChange} />
        <button className="btn-add" onClick={this.handleAdd}>
          Add
        </button>
        {/* <TodoCreate onClick={this.createItem} /> */}
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onCheck={this.ItemClicked(item)}
            onDelete={this.ItemDeleted(item)}
          />
        ))}
      </div>
    );
  }
}

export default App;
