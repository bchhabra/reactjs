import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component { 
  state = { 
    persons: [
      { name: 'Brijesh', age: 34},
      { name: 'Aleksej', age: 34},
      { name: 'Saurabh', age: 34},
    ]
  }

  switchNameHandler = () =>{
    //console.log('Was clicked !!');
    this.setState({
      persons: [
        { name: 'Brijesh Chhabra', age: 34},
        { name: 'Aleksej', age: 34},
        { name: 'Saurabh', age: 38},
      ],
      otherState: 'Some Other value'

    });
  }
  render() {  
  return (
   <div className="App">
       <h1> Hi I am Brijesh !!</h1>
       <p> this is really working</p>
       <button onClick={this.switchNameHandler}> Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
   </div>
  );
    //return React.createElement('div', null, React.createElement('h1', null,  'Does this work now?'));
  }
}

export default App;
