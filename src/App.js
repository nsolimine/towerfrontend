import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    .then(intermediate => {
      console.log(intermediate);
      this.setState({intermediate})
    });
  };

  getAdvanced = () => {
    return fetch("https://towerbackend.herokuapp.com/advanceds")
    .then(response => response.json())
    .then(advanced => {
      console.log(advanced);
      this.setState({advanced})
    });
  };


  render() {
    // if (this.state.loading) return <h1>Loading...</h1>

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
