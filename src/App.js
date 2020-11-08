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

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Raju', age: '28' },
        { name: 'Shouvick', age: '99' },
        { name: 'Joe', age: '78' }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi I am a React App!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: coding</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );

}

export default app;

