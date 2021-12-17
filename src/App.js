import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Franskestein",
          id: "asc1",
        },
        {
          name: "Dracula",
          id: "asc2",
        },
        {
          name: "Zombie",
          id: "asc3",
        },
      ],
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const monsters = this.state.monsters;
    const newMonsters = [...this.state.monsters];
    const lastId = parseInt(this.state.monsters[monsters.length - 1].id[3]) + 1;

    newMonsters.push({
      name: this.state.value,
      id: `${"asc" + lastId}`,
    });

    this.setState({ monsters: newMonsters });

    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}

        <form onSubmit={this.handleSubmit}>
          <label>
            Monster:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
