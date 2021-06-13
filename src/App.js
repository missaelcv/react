import React, {Component} from 'react';
import './App.css';


import tasks from './sample/tasks.json';
console.log(tasks)


class App extends Component{

    state= {
      tasks: tasks
    }

render() { 
  return <div>
    { this.state.tasks.map(e => <p key={e.id}> 
      {e.id} - {e.title} - {e.description} - {e.done}
    </p>)}
  </div>
  }
}

export default App;
