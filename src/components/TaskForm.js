import React, { Component } from 'react'

class TaskForm extends Component {

    state = {
        title: '',
        description: ' '
    }

    onsubmit = e => {
     console.log(this.state)
        e.preventDefaut();
    }

    onChange = e => {
        console.log(e.target.name, e.target.value)
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
export default TaskForm;