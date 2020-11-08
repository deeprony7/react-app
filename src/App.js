import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: '28' },
      { name: 'Shouvick', age: '99' },
      { name: 'Joe', age: '78' }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Raju', age: '28' },
        { name: 'Shouvick', age: '99' },
        { name: 'Joe', age: '78' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: coding</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
