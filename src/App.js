import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Brijesh', age: 28 },
      { name: 'Aleksej', age: 29 },
      { name: 'Saurabh', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Aleksej', age: 29 },
        { name: 'Saurabh', age: 27 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Brijesh', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Saurabh', age: 27 }
      ]
    });
  };
  
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1x solid blue',
      padding : '8px',
      cursor : 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style = {style}
        onClick={ () => this.switchNameHandler('BBChhabra !!')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Nidhi')}
          change={this.nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
