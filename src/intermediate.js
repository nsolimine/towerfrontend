import React from "react";

export class Section extends React.Component{

  constructor(props){
      super(props);
      this.state = {
      toggleClass: true,
      togglePanels: []
      }
      this.toggleFunction = this.toggleFunction.bind(this);
      this.createListItemIntermediate = this.createListItemIntermediate.bind(this);
    }

    toggleFunction = (item) => {
      const { togglePanels } = this.state
      const index = togglePanels.indexOf(item.id)
      if(index !== -1){
        togglePanels.splice(index, 1)
      } else {
        togglePanels.push(item.id)
      }
      this.setState({ togglePanels })
    }

  createListItemIntermediate(item){
    return (
      <li key={item.id}>
        <div className="profile">
          <h4 className="profileLevel" onClick={() => this.toggleFunction(item)}>Level: {item.id}</h4>
        </div>
        <div className={this.state.togglePanels.includes(item.id)?"skills-container":"skills-container hidden"}>
          <p>Difficulty: {item.difficulty}</p>
          <p>Artist: {item.artist}</p>
          <p>Song: "{item.song}"</p>
          <p>Techniques Used: {item.technique}</p>
          <p><a href={item.url} target="blank">Link to listen on YouTube</a></p>
          <button>Completed!</button>
        </div>
      </li>
    );
  }

  render () {
    return (
      <section>
        <h2>Intermediate Songs</h2>
        <ul className = "intermediateList">
          {this.props.intermediatelistings.map(this.createListItemIntermediate)}
        </ul>
      </section>
    );
  }
}
