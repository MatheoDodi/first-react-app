import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  shouldComponentUpdate () {
    return true;
  }

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

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons} 
          styled={style}
          click={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'), React.createElement('p', null, 'This is a test'))
  }
}

export default App;
