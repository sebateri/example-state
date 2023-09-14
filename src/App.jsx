import React, { Component } from 'react';
import './App.css';
import { UserClass, UserFunction, UserChildren } from './user';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: 'Ivan', years: 30 },
        { name: 'Marko', years: 35 },
        { name: 'Ana', years: 25 },
      ],
      arbitraryText: "a hobi mi je programiranje...", // Define arbitrary text in the state
    };
  }

  // Function to update the age of a user
  updateUserAge = (index) => {
    this.setState((prevState) => {
      const updatedUsers = [...prevState.users];
      updatedUsers[index].years += 1;
      return { users: updatedUsers };
    });
  };

  render() {
    return (
      <>
        <h1>State</h1>
        <UserClass name={this.state.users[0].name} years={this.state.users[0].years} />
        <UserFunction name={this.state.users[1].name} years={this.state.users[1].years} />
        <UserChildren name={this.state.users[2].name} years={this.state.users[2].years}>
          {this.state.arbitraryText} {/* Display arbitrary text via children props */}
        </UserChildren>
        <button onClick={() => this.updateUserAge(0)}>Increment Age</button>
        {/* Button to update the age of the first user */}
      </>
    );
  }
}

export default App;
