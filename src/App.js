import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Matthew", age: 22},
      { name: "Max", age: 28},
      { name: "Linda", age: 23}
    ],
    showPersons : false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }
  

  render() { 
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return (<Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />)
            })}
        </div>
      );
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a test</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Show Persons</button>
        {persons}
      </div>
    );
  

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'), React.createElement('p', null, 'This is a test'))
  }
}

export default App;
