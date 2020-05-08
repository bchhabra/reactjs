import React, { Component } from 'react';
import './App.css';
import UserInput from './User/userInput';
import UserOutput from './User/userOutput';

class Assignment1 extends Component {
  state = {
    firstname: 'Brijesh',
    lastname: 'Chhabra'
  };

  switchFirstNameHandler = (event) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
       firstname: event.target.value
     });
  };
  switchLastNameHandler = (event) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      lastname: event.target.value
    });
  };


  render() {
    return (
      <div className="App">
        <h1>Assignment</h1>
        <UserInput
          firstchange={this.switchFirstNameHandler.bind(this)}
          lastchange={this.switchLastNameHandler.bind(this)}
          firstname={this.state.firstname} lastname={this.state.lastname}
        />

        <UserOutput
          firstname={this.state.firstname}
          lastname={this.state.lastname}>
        </UserOutput>

      </div>
    );
  }
}

export default Assignment1;

/*
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
*/