import React from 'react';

const cockpit = ( props ) => {
    let buttonText;
    if (props.showPersons) {
      buttonText = `Hide Persons`;
    } else {
      buttonText = `Show Persons`;
    }

    let classes = []
    if (props.persons.length <= 2) {
      classes.push('red');
    }
    if (props.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is a test</p>
                <button
                style={props.styled}
                onClick={props.click}>{buttonText}
            </button>
        </div>
    )
}

export default cockpit;