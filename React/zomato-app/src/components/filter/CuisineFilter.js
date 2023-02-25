import axios from "axios";
import React, { Component } from "react";

let url = "http://localhost:8080/filter";

export default class CuisineFilter extends Component {
  filterCuisine = (event) => {
    let mealId = this.props.mealId;
    let cuisineId = event.target.value;
    let cuisineUrl;
    if (cuisineUrl === "") {
      cuisineUrl = `${url}/${mealId}`;
    } else {
      cuisineUrl = `${url}/${mealId}?cuisineId=${cuisineId}`;
    }
    axios.get(cuisineUrl).then((res) => {
      this.props.restPerCuisine(res.data);
    });
  };
  render() {
    return (
      <>
        <center style={{ fontSize: "20px", color: "blue" }}>
          cuisineFilter
        </center>
        <div style={{ marginLeft: "12%" }} onChange={this.filterCuisine}>
          <label className="radio">
            <input type="radio" name="cuisine" value="" />
            All
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="1" />
            North Indian
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="2" />
            South Indian
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="3" />
            Chinese
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="4" />
            Fast Food
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="5" />
            Street Food
          </label>
        </div>
      </>
    );
  }
}
