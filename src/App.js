import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Matthew", age: 22},
      { name: "Max", age: 28},
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS : this.state.persons[0].name = 'Matthew Dodi';
    this.setState({
      persons: [
        { name: newName, age: 22},
        { name: "Archie", age: 111111},
      ]
    
    })

  }

    nameChangedHandler = (event) => {
      this.setState({
        persons: [
          { name: event.target.value, age: 22},
          { name: "Archie", age: 111111},
        ]
      
      })
    }
  

  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a test</p>
        <button
        style={style}
        onClick={() => this.switchNameHandler('Matthew Dodi')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Mat')}
          changed={this.nameChangedHandler}> hobbies: coding</Person>
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
      </div>
    );
  

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'), React.createElement('p', null, 'This is a test'))
  }
}

export default App;
