import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";


class App extends Component {
  state = {
    person: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Menu", age: 29 },
      { id: "asdf11", name: "Steph", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.person[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({
      person: persons
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      color: 'white',
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.person.length <= 2) {
      classes.push('red');
    }
    if (this.state.person.length <= 1) {
      classes.push('bold')
    }

    return (
        <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonHandler}>
            Switch name
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
