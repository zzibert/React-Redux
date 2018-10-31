import React, { Component } from 'react';
import Ninjas from './Ninjas'
class App extends Component {
  state = {
    ninjas: [
      {name: "Ryu", age: 25, belt: "black", id: 1},
      {name: "matchMedia", age: 42, belt: "red", id: 2},
      {name: "trololo", age: 20, belt: "green", id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={ this.state.ninjas } />
      </div>
    );
  }
}

export default App