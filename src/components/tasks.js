import React, { Component } from 'react';

class Tasks extends Component {
    render () {
        return this.props.tasks.map(e => <p key={e.id}>
            {e.title} - {e.description} - {e.done} - {e.id}
            <input type="checkbox"/>
            <button>X</button>
          </p>)
    }
}
export default Tasks;