import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: '28' },
      { name: 'Shouvick', age: '99' },
      { name: 'Joe', age: '78' }
    ]
  })

  const [otherState, setOtherState] = useState("some other value")

  console.log(personsState, otherState)

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '28' },
        { name: 'Shouvick', age: '99' },
        { name: 'Joe', age: '78' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App!</h1>
        <button onClick={() => this.switchNameHandler("Kane")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Ricardo")}>My hobbies: coding</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default app;

