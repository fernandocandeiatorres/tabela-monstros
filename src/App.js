import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      value: "",
      searchField: "",
    };
  }

  // When the component is loaded, call this method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // Handle form to create monsters
  handleChange = (e) => {
    if (e.target.type === "search") {
      this.setState({ searchField: e.target.value });
    } else if (e.target.type === "text") {
      this.setState({ value: e.target.value });
    }
  };

  // Handle form when submitted to create monsters
  handleSubmit = (event) => {
    const newMonsters = [...this.state.monsters];

    newMonsters.push({
      name: this.state.value,
    });

    this.setState({ monsters: newMonsters });
    event.preventDefault();
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <div className="search-boxes">
          {/* INPUT SEARCHFIELD TO FILTER  */}
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
          ></SearchBox>

          {/* FORM TO CREATE MONSTER */}
          <form onSubmit={this.handleSubmit}>
            <label>
              Monster:
              <input
                placeholder="CREATE MONSTER"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
