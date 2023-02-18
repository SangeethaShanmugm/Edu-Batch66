import React, { Component } from "react";
import "./Search.css";

const lurl = "http://localhost:8080/locations";
const rurl = "http://localhost:8080/restaurants?stateId=";

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

  renderRest = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option value={item.restaurant_id}>
            {item.restaurant_name} | {item.address}
          </option>
        );
      });
    }
  };

  handleCity = (event) => {
    const stateId = event.target.value;
    fetch(`${rurl}${stateId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ resturants: data });
        console.log(data);
      });
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
          <select onChange={this.handleCity}>
            <option>----SELECT CITY----</option>
            {this.renderCity(this.state.location)}
          </select>
          <select id="select-style">
            <option>---SELECT RESTURANTS----</option>
            {this.renderRest(this.state.resturants)}
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
