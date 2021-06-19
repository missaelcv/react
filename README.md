# Getting Started with Create React App

### Instalacion de NPM
 ```
 npm install npm@latest -g
 ```

## `Create React App`
Create React App es un ambiente cómodo para aprender React, y es la mejor manera de comenzar a construir una nueva aplicación de página única usando React.

configura tu ambiente de desarrollo de forma que puedas usar las últimas características de Javascript, brindando una buena experiencia de desarrollo, y optimizando tu aplicación para producción. Necesitarás tener Node >= 10.16 y npm >= 5.6 instalados en tu máquina. Para crear un proyecto ejecuta:

## Consola cmd
```
npx create-react-app my-app
cd my-app
npm start
```

### `npm start`
Inicio del servidor locahost::3030

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### React Creacion de app de tareas 
```
Con el proyecto anterior de react  ahora se utilizara para crear una app de trabajes lo que son las tarea donde 
•	Liste tareas
•	Agregue tareas
•	Elimine tareas 
•	Estado tareas 
```

### Creado una carpeta llamada sample con un archivo llamado task.json 
```
[
    {
        "id" : 1,
        "title" : "task one",
        "description" : "lorem ipsum",
        "done": false
    },

    {
        "id" : 2,
        "title" : "task two",
        "description" : "lorem ipsum",
        "done": false
    },

    {
        "id" : 3,
        "title" : "task tree",
        "description" : "lorem ipsum",
        "done": false
    }
]
```

### Agregar al App.js
```
import tasks from './sample/tasks.json';
console.log(tasks)
```

### Agregando Componentes Con Map y State
```
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
```

### Llamando el componente Tasks
```
import React, {Component} from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
class App extends Component{
    state= {
      tasks: tasks
    }
render() { 
  return <div>
    <Tasks tasks= { this.state.tasks}/>
  </div>
  }
}
export default App;
```

### Mostrado El contenido del componente Tasks
```
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
```

### Creando esta function para retorna estilos donde tenga condiciones
```
 StyleComplete (){
         return {
             fontSize: '20px',
             color: this.props.task.done ? 'gray' : 'black',
             textDecoration: this.props.task.done ? 'line-through' : 'none'
         }
    }
```

### Llamando la función desde una etiqueta para que agrupe todo el contenido 
```
 return  <p style={this.StyleComplete()}> 
 ```

### Detallando un boton con diferentes funciones para personalizar nuestro propio estilo 
```
const btnDelete= {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    borde: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer' 
}
Importa a tasks.js 
import PropTypes from 'prop-types';
```

### Agregamos propstype al tasks.js haciendo la llamada de props con un tipo de arreglo y que se requerido
```
Task.propTypes = {
    tasks: PropTypes.array.isRequired
}
```

### Agregarlo a task.js hacienda la llamada de un objeto donde es requerido
```
Task.propTypes = {
    task: PropTypes.object.isRequired 
}
```

### Form
Creando el component Form como clase y heredandola de react, con un etiquetas de HTML como form e input 
```
import React, { Component } from 'react'
class TaskForm extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Write a Task"/>
            </form>
        )
    }
}
export default TaskForm;
```

### Importando TaskForm en App.js
```
import TaskForm from './components/TaskForm';
```

### Usando el component TaskForm  en otro componente Tasks
```
 <TaskForm/>
    <Tasks tasks= {this.state.tasks}/>
```

### Usando un parametro OnSubmit para que la consola no se actualize cada vez que puse un boton sino que muestre en enviando
```
 onsubmit = e => {
        console.log('submiting....')
        e.preventDefaut();
    }
```

### Usando la onSubmit como una clase para el form y usando un objeto como this.onSubtmit para que se use como evento en la consola.
```
   <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Write a Task"/>
```

### Usando un evento para dos input que muestra el cambio que hace a digitar cada letra y se agrega la proxima nuevamente 
```
onChange = e => {
        console.log(e.target.value)
    }
El mismo evento para ambos etiquetas 
 <input type="text" placeholder="Write a Task" onChange={this.onChange}/>
 <textarea placeholder="write a description" onChange={this.onChange}></textarea>
 ```

### Creando un State con title y description para usarlo en la etiquetas 
```
state = {
        title: '',
        description: ' '
    }
```

### Usando e.preventDefault para mostrar en la consola que cuando se escriba pueda tener el contenido como title tarea por cada letra
```
 onsubmit = e => {
     console.log(this.state)
        e.preventDefaut();
    }
```

### El evento onChange con el consolo.log mostramos que en la consola cuando se escriba y se envie el formulario se podrá ver los datos organizado según el orden de formulario con su escritura que haga el ususario 
```
onChange = e => {
        console.log(e.target.name, e.target.value)
       this.setState({
          [e.target.name]: e.target.value
       })
    }
```

### Forma para organizer el formulario y tambien creamos otra etiqueta llamada name con su respetiva como en en la primera como title y description segun el state que se creo al inicio que eso dos datos 
```
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
```

### Passing Functions
```
Llamadamos la function addTask desde la function taskForm en el App.js
return <div>
    <TaskForm addTask={this.addTask}/>
    <Tasks tasks= {this.state.tasks}/>
  </div>
  }
```

### Forma para llama la function desde el archivo TaskForm usando props más la función para que funciones en enlace de esos componentes
```
 this.props.addTask();
 ```

### Para agregar una nueva tarea con sus respetivos datos 
```
 addTask = (title,description) => {
      const newTask = {
        title: title,
        description: description,
        id: this.state.tasks.length
      }
```

### Hacienda el enlace para el evento 
```
onsubmit = e => {
     this.props.addTask(this.state.title, this.state.description)
        e.preventDefaut();
    }
```