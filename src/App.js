import React from 'react';
import './App.css';

// function Helloworld(props){
//   console.log(props)
//   return (
//   <div id= "hello">
//     <h3>{props.sustitle}</h3>
//     {props.mytext}
//   </div>
//   )
// }

class Helloworld extends React.Component{

    state = {
      show :true
    }

    toggleShow = () => {
      this.setState({show: !this.state.show})
    }

  render (){
    if (this.state.show) {
      return (
        <div id= "hello">
          <h3>{this.props.sustitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow.bind(this)}>Toggle Show</button>
        </div>
        )
    } else  {
       return  <h1>
         There are not elementos
         <button onClick={this.toggleShow}>Togle Regreso</button>
      </h1>
    }
}
}

function App() {
  return (
    <div>
      this is my componert is:
      <Helloworld mytext="Hola Missael" sustitle ="Componente 1" />
      <Helloworld mytext="Hola Maileny" sustitle="Componente 2"/>
      <Helloworld mytext="Son dos Cara e locos" sustitle="Componente 3"/>
     </div>
  );
}
export default App;
