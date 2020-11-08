import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: "suoermax"
  }

  inputChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Assignment - 1</h1>
        <UserInput
          changed={this.inputChangeHandler}
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="JohnLegend" />
      </div>
    );
  }
}

export default App;
