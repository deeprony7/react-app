import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App!</h1>
        <Person name="Max" age="28"/>
        <Person name="Shouvick" age="99">My hobbies: coding</Person>
        <Person name="Joe" age="78" />
      </div>
    );
  }
}

export default App;
