import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => { 
  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Brijesh', age: 34},
        { name: 'Aleksej', age: 34},
        { name: 'Saurabh', age: 34},
      ],
      someOtherValue : 'Some bull shit'
    });
    const [otherState, setOtherState] = useState('Some other state');
console.log(personsState, otherState)
 const switchNameHandler = () => {
  setPersonsState({
    persons: [
      { name: 'Brijesh Chhabra', age: 34},
      { name: 'Aleksej', age: 34},
      { name: 'Saurabh', age: 38},
    ]
  });
};
 return (
  <div className="App">
      <h1> Hi I am Brijesh !!</h1>
      <p> this is really working</p>
      <button onClick={switchNameHandler}> Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
  </div> );

};

export default App;


