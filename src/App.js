import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloworld="Hello world";
    const user = {firstname: 'pierre', lastname: 'le nestour'};
    return (
      <div className="App">
      <h2>{helloworld} dd- {user.firstname} {user.lastname}</h2>
      </div>
    );
  }
}

export default App;
