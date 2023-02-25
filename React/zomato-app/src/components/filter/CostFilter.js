import React, { Component } from "react";
import axios from "axios";
const url = "http://localhost:8080/filter";

export default class CostFilter extends Component {
  filterCost = (event) => {
    let mealId = this.props.mealId;
    let cost = event.target.value.split("-");
    let lcost = cost[0];
    let hcost = cost[1];
    let costUrl;

    if (event.target.value === "") {
      costUrl = `${url}/${mealId}`;
    } else {
      costUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`;
    }
    axios.get(costUrl).then((res) => {
      this.props.restPerCost(res.data);
    });
  };

  render() {
    return (
      <>
        <center style={{ fontSize: "20px", color: "blue" }}>costfilter</center>
        <div style={{ marginLeft: "12%" }} onChange={this.filterCost}>
          <label className="radio">
            <input type="radio" name="cuisine" value="" />
            All
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="100-300" />
            100-300
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="301-500" />
            301-500
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="501-800" />
            501-800
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="801-1000" />
            801-1000
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="1001-1200" />
            1001-1200
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="1201-2000" />
            1201-2000
          </label>
        </div>
      </>
    );
  }
}
