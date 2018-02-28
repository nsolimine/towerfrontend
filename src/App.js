import React, { Component } from 'react';
import './App.css';

import { Header } from "./header.js";
import { Section } from "./intermediate.js";
import { Section2 } from "./advanced.js";
import SongForm from "./form.js";

class App extends Component {
  state = {
    intermediates: [],
    advanceds: []
  }

  loadData = () => {
    this.setState({loading: true})
    Promise.all([this.getSongs("intermediates"), this.getSongs("advanceds")])
    .then(() => {
      this.setState({loading: false})
    })
  }

  componentDidMount() {
    this.loadData();
  }

  getSongs = (level) => {
    return fetch("https://towerbackend.herokuapp.com/" + level)
    .then(response => response.json())
    .then(response => {
      if (!response[level]) {throw new Error('Expected "level" ' + level + ' in JSON response');}
      this.setState({[level]: response[level]})
    });
  };

  createSong = (level, data) => {
    return fetch('https://towerbackend.herokuapp.com/' + level, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        })
      })
    .then(res => res.json())
    .then(response => this.loadData())
    .catch(error => console.error('Error:', error));
  }

  onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const postObj = {
      difficulty: data.get("selectDifficulty"),
      artist: data.get("artist"),
      song: data.get("song"),
      technique: data.get("technique"),
      url: data.get("url")
    };
    this.createSong(postObj.difficulty, postObj)
  }











  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="songsDiv">
            <Section intermediatelistings={this.state.intermediates} loadData={this.loadData} />
            <Section2 advancedlistings={this.state.advanceds} loadData={this.loadData} />
          </div>
          <div className="formDiv">
            <h3>Suggest a song!</h3>
            <SongForm onSubmit={this.onSubmit} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
