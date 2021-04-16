import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Write a task" onChange={this.onChange} value={this.state.title}/>
                <br/><br/>
                <textarea name="description" placeholder="Write a description" onChange={this.onChange} value={this.state.description}></textarea>
                <input type="submit"/>
            </form>
        )
    }
}