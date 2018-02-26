import React from "react";

export class Section extends React.Component{

  createListItemIntermediate(item){
    return (
      <li key={item.id}>
        <p>Difficulty: {item.difficulty}</p>
        <p>Artist: {item.artist}</p>
        <p>Song: {item.song}</p>
        <p>Techniques Used: {item.technique}</p>
        <p><a href={item.url} target="blank">Link to listen on YouTube</a></p>
        <button>Completed!</button>
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
