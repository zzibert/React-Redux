import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
class App extends Component {
  state = {
    ninjas: [
      {name: "Ryu", age: 25, belt: "black", id: 1},
      {name: "matchMedia", age: 42, belt: "red", id: 2},
      {name: "trololo", age: 20, belt: "green", id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => ninja.id !== id)
    this.setState({
      ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome!</p>
        <Ninjas deleteNinja={ this.deleteNinja } ninjas={ this.state.ninjas } />
        <AddNinja  addNinja={ this.addNinja }/>
      </div>
    );
  }
}

export default App