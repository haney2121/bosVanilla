import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App!</h1>
        <p>This is really working!</p>
        <Person name={"Justin"} age="30"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello World!"))
  }
}

export default App;
