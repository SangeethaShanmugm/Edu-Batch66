import React, { Component } from "react";
import QuickDisplay from "./QuickDisplay";
import "./QuickSearch.css";
export default class QuickSearch extends Component {
  render() {
    return (
      <div id="quicksearch">
        <span id="quickHeading">Quick Search</span>
        <span id="quickSubheading">Discover restaurants by type of meal</span>
        <QuickDisplay />
      </div>
    );
  }
}
