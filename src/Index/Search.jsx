import React, { Component } from "react";
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <input
          placeholder="Search artist or style .."
          name="text"
          type="text"
          value={this.props.text}
          onChange={this.props.change}
        /> 
      </div>
    )
  }
}

export default Search;