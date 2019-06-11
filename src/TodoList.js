import React from 'react';
import './App.css';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this._handleRemoveItem = this._handleRemoveItem.bind(this);
    }
    _handleRemoveItem() {
        this.props.handleRemoveItem(this.props.item.id);
    }
    
    render() {
        return (
            <div>
                <button onClick={this._handleRemoveItem}>Remove Item</button>
                {this.props.item.message}
            </div>
        );
    }
}


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            todoItems: []
        }
        this.itemCounter = 0;
        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    handleAddItem() {
        this.itemCounter++;
        const newItem = {
            id: this.itemCounter,
            message: this.state.userInput,
        }
        this.state.todoItems.push(newItem);

        this.setState({
            todoItems: this.state.todoItems,
            userInput: ""
        });
    }

    handleRemoveItem(id) {
        const filteredState = this.state.todoItems.filter(item => item.id !== id)
        this.setState({
            todoItems: filteredState,
        });
    }

    render() {
        const todoList = this.state.todoItems.map(item => {
            return (
                <TodoItem
                    key={item.id}
                    item={item}
                    handleRemoveItem={this.handleRemoveItem}
                />
            );
        });
        return (
            <div>
                <h1>Erik's To-Do List</h1>
                <input
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    type="text"
                    placeholder="Add new item to list..."
                />
                <button onClick={this.handleAddItem}>Add</button>
                {todoList}
            </div>
        );
    }
}

export default TodoList;
