import React, { Component } from "react";
import QuickDisplay from "./QuickDisplay";

const qurl = "https://zomato-app.onrender.com/quickSearch";

export default class QuickSearch extends Component {
  constructor() {
    super();
    this.state = {
      mealType: "",
    };
  }
  render() {
    return (
      <div id="quicksearch">
        <span id="quickHeading">Quick Search</span>
        <span id="quickSubheading">Discover restaurants by type of meal</span>
        <QuickDisplay mealData={this.state.mealType} />
      </div>
    );
  }

  //api calling on page load
  componentDidMount() {
    fetch(qurl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealType: data });
        console.log(data);
      });
  }
}
