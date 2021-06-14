import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Task from './Taks';

class Tasks extends Component {
    render () {
        return this.props.tasks.map(task => <Task task={task} key={task.id}/>)
    }
}

Task.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;