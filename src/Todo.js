import React from 'react';
import './App.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            todoItems: []
        }

        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.markComplete = this.markComplete.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem() {
        this.state.todoItems.push(this.state.userInput);
        this.setState({
            todoItems: this.state.todoItems,
            userInput: ""       
        });
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    markComplete(){}

    deleteItem(e, id){
        
    }

    render() {

        const todoList = this.state.todoItems.map(item =>
            <li key={item}>
                <button onClick={(e, id) => this.deleteItem(e, id)}>Delete Item</button>
                <button onClick={this.markComplete}>Mark Complete</button>
                {item}
            </li>
        );

        return (
            <div>
                <h1>Erik's To-Do List</h1>
                <input
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    type="text"
                    placeholder="Add new item to list..."
                />
                <button onClick={this.addItem}>Add</button>
                <ul>
                    {todoList}
                </ul>
            </div>
        );
    }
}


export default Todo;
