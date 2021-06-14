
import React, { Component } from 'react'

class Task extends Component {

    StyleComplete (){
         return {
             fontSize: '20px',
             color: this.props.task.done ? 'gray' : 'black',
             textDecoration: this.props.task.done ? 'line-through' : 'none'
         }
    }

    render () {
        const {task} = this.props;
       
        return  <p style={this.StyleComplete()}> 
        {task.title} - 
        {task.description} - 
        {task.done} - 
        {task.id}
        <input type="checkbox"/>
        <button style={btnDelete}>X</button>
        </p>
    }
}

const btnDelete= {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    borde: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer' 
}
export default Task;