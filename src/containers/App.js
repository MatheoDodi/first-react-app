import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Matthew", age: 22},
      { id: '2', name: "Linda", age: 23},
      { id: '3', name: "Leonidas", age: -4},
    ],
    showPersons : false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons : persons}); 
  } 

  deletePersonHandler = (event, personIndex) => {
    if (event.target.type === 'text') {
      return;
    } else {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }
  

  render() { 
    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            delete={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );

      style.backgroundColor = 'red';
    }

    let buttonText;
    if (this.state.showPersons) {
      buttonText = `Hide Persons`;
    } else {
      buttonText = `Show Persons`;
    }

    let classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is a test</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>{buttonText}</button>
        {persons}
      </div>
    );
  

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'), React.createElement('p', null, 'This is a test'))
  }
}

export default App;
