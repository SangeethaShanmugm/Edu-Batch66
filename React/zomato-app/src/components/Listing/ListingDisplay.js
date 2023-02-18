import React, { Component } from "react";

export default class ListingDisplay extends Component {
  render() {
    return (
      <div id="content">
        <div className="item">
          <div className="row">
            <div className="col-md-5">
              <img
                className="Image"
                src="https://b.zmtcdn.com/data/pictures/chains/3/143/c77dfea619f2d7786a7d054afab5cd88_featured_v2.jpg"
                alt="Domino's Pizza"
              />
            </div>
            <div className="col-md-7">
              <div className="hotel-name">Domino's Pizza</div>
              <div className="city-name">Ashok Vihar Phase 3, New Delhi</div>
              <div className="city-name">Very Good</div>
              <div className="city-name">Rs. 666</div>
              <div className="labelDiv">
                <span className="label label-primary">Lunch</span>
                <span className="label label-info">Nightlife</span>
              </div>
              <div className="labelDiv">
                <span className="label label-danger">North Indian</span>
                <span className="label label-warning">Chinese</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
