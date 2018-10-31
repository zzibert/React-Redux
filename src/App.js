import React, { Component } from 'react';
import Ninjas from './Ninjas'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome!</p>
        <Ninjas name="Ryu" age="25" belt="black"/>
        <Ninjas name="Mami" age="42" belt="red"/>
      </div>
    );
  }
}

export default App;
