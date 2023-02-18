import React, { Component } from "react";
import Header from "../../Header";
import "./listing.css";
import ListingDisplay from "./ListingDisplay";
export default class ListingApi extends Component {
  constructor() {
    super();

    this.state = {
      restaurantList: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div class="row">
          <div id="mainListing">
            <div id="filter">
              <center>
                <h4>Filter</h4>
              </center>
            </div>
          </div>
          <ListingDisplay/>
        </div>
      </div>
    );
  }
}
