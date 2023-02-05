import React, { Component } from "react";
import "./Search.css";

const lurl = "https://zomato-app.onrender.com/locations";
const rurl = "https://zomato-app.onrender.com/restaurant";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      resturants: "",
    };
  }

  renderCity = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option key={item._id} value={item.state_id}>
            {item.state}
          </option>
        );
      });
    }
  };

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
            {this.renderCity(this.state.location)}
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

  //api calling on page load
  componentDidMount() {
    fetch(lurl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ location: data });
        console.log(data);
      });
  }
}
