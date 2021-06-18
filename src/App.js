import React, {Component} from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component{
    state= {
      tasks: tasks
    }
 
    addTasks = () => {
      console.log('adding a new task')

    }
    
render() { 
  return <div>
    <TaskForm addTasks={this.addTasks}/>
    <Tasks tasks= {this.state.tasks}/>
  </div>
  }
}
export default App;