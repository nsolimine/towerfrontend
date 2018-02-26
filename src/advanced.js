import React from "react";

export class Section2 extends React.Component {
  createListItemAdvanced(item){
    return (
      <li key={item.id}>
        <p>Level: {item.id}</p>
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
        <h2>Advanced Songs</h2>
        <ul className = "advancedList">
          {this.props.advancedlistings.map(this.createListItemAdvanced)}
        </ul>
      </section>
    );
  }
}
