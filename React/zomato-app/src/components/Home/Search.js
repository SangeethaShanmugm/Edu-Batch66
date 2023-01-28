import React, { Component } from "react";
import "./Search.css";
export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      resturants: "",
    };
  }

  render() {
    return (
      <div id="search">
        <div id="logo">
          <span>e!</span>
        </div>
        <div id="heading">
          <p>Find the best Place Near You</p>
        </div>
        <div id="dropdown">
          <select>
            <option>----SELECT CITY----</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
          </select>
          <select id="select-style">
            <option>---SELECT RESTURANTS----</option>
            <option>Toscano</option>
            <option>Ozaa</option>
            <option>Spice Terrace</option>
          </select>
        </div>
      </div>
    );
  }
}
