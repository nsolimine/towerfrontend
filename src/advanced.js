import React from "react";

export class Section2 extends React.Component {

  constructor(props){
      super(props);
      this.state = {
      toggleClass: true,
      togglePanels: []
      }
      this.toggleFunction = this.toggleFunction.bind(this);
      this.createListItemAdvanced = this.createListItemAdvanced.bind(this);
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

  createListItemAdvanced(item){
    return (
      <li key={item.id}>
        <div className="profile">
          <h4 className="profileLevel" onClick={() => this.toggleFunction(item)}>Level: {item.id}</h4>
        </div>
        <div className={this.state.togglePanels.includes(item.id)?"skills-container":"skills-container hidden"}>
          <p>Difficulty: {item.difficulty && item.difficulty.replace(/s$/,"")}</p>
          <p>Artist: {item.artist}</p>
          <p>Song: "{item.song}"</p>
          <p>Techniques Used: {item.technique}</p>
          <p><a href={item.url} target="blank">Link to listen on YouTube</a></p>
          <div>
            <button>Completed!</button>
            <button>Delete</button>
            <button>Update</button>
          </div>
        </div>
      </li>
    );
  }
  render () {
    return (
      <section>
        <h2>Advanced Songs</h2>
        <ul className = "advancedList">
          {this.props.advancedlistings.map(this.createListItemAdvanced)}
        </ul>
      </section>
    );
  }
}
