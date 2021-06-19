import React, { Component } from 'react'

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ' '
    }

    onsubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefaut();
    }

    onChange = e => {
       this.setState({
          [e.target.name]: e.target.value
       })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" 
                name="title" 
                placeholder="Write a Task" 
                onChange={this.onChange} 
                value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                name="description" 
                placeholder="write a description" 
                onChange={this.onChange} 
                value={this.state.description}></textarea>
                <input type="submit"/>
            </form>
        )
    }
}