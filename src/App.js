import React, { Component } from 'react';
import './App.css';

import { Header } from "./header.js";
import { Section } from "./intermediate.js";
import { Section2 } from "./advanced.js";

class App extends Component {
  state = {
    intermediate: [],
    advanced: []
  }

  componentDidMount() {
    this.setState({loading: true})
    Promise.all([this.getIntermediate(), this.getAdvanced()])
    .then(() => {
      this.setState({loading: false})
    })
    // OR USE
    // this.getIntermediate();
    // this.getAdvanced();
  }

  getIntermediate = () => {
    return fetch("https://towerbackend.herokuapp.com/intermediates")
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({intermediate: response.intermediates})
    });
  };

  getAdvanced = () => {
    return fetch("https://towerbackend.herokuapp.com/advanceds")
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({advanced: response.advanceds})
    });
  };


  render() {
    // if (this.state.loading) return <h1>Loading...</h1>

    return (
      <div className="App">
        <Header />
        <main>
          <Section intermediatelistings={this.state.intermediate} />
          <Section2 advancedlistings={this.state.advanced} />
        </main>
      </div>
    );
  }
}

export default App;
