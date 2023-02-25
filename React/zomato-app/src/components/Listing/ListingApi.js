import React, { Component } from "react";
import axios from "axios";
import Header from "../../Header";
import "./listing.css";
import ListingDisplay from "./ListingDisplay";
import CostFilter from "../filter/CostFilter";
import CuisineFilter from "../filter/CuisineFilter";

const url = "http://localhost:8080/restaurants?mealId=";

export default class ListingApi extends Component {
  constructor() {
    super();

    this.state = {
      restaurantList: "",
    };
  }

  setDataFilter = (data) => {
    this.setState({ restaurantList: data });
  };
  render() {
    return (
      <div>
        <div class="row">
          <div id="mainListing">
            <div id="filter">
              <center>
                <h4>Filter</h4>
              </center>
              <CuisineFilter
                mealId={this.props.match.params.mealId}
                restPerCuisine={(data) => {
                  this.setDataFilter(data);
                }}
              />
              <CostFilter
                mealId={this.props.match.params.mealId}
                restPerCost={(data) => {
                  this.setDataFilter(data);
                }}
              />
            </div>
          </div>
          <ListingDisplay listData={this.state.restaurantList} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    let mealId = this.props.match.params.mealId;
    // sessionStorage.setItem("mealId", mealId);
    axios.get(`${url}${mealId}`, { method: "GET" }).then((res) => {
      this.setState({ restaurantList: res.data });
    });
  }
}
