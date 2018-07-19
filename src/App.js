import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi , I'm a React App</h1>
        <p>This is a test</p>
      </div>
    );
  

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'), React.createElement('p', null, 'This is a test'))
  }
}

export default App;
