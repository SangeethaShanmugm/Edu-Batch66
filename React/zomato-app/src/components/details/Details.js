import axios from "axios";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import "./Details.css";
import MenuList from "./MenuList";
const url = "http://localhost:8080";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: "",
      menuList: "",
      userItem: "",
      mealId: sessionStorage.getItem("mealId"),
    };
  }

  addToCart = (data) => {
    this.setState({ userItem: data });
  };

  render() {
    // let details = this.state.details
    let { details } = this.state;
    return (
      <div id="mainContent">
        <div className="ImgDiv">
          <img src={details.restaurant_thumb} alt="rest-pic" />
        </div>
        <div className="contentDiv">
          <h2>{details.restaurant_name}</h2>
          <span>230 customers Say {details.rating_text}</span>
          <h3>
            <del>Old Price: Rs.1000</del>
          </h3>
          <h3>New Price: Rs.{details.cost}</h3>
          <h3>
            Best taste of Fresh Chai with Samosa At your Door Step or DineIn
          </h3>
          <div className="feature-container">
            <figure>
              <img
                class="featureIcon"
                src="https://i.ibb.co/wJvrhYg/veg.png"
                alt="pureveg"
              />
              <figcaption>Pure Veg</figcaption>
            </figure>
            <figure>
              <img
                class="featureIcon"
                src="https://i.ibb.co/mD3jpgc/sentizied.png"
                alt="sanitized"
              />
              <figcaption>Fully Sanitized</figcaption>
            </figure>
          </div>
          <Tabs>
            <TabList>
              <Tab>About Us</Tab>
              <Tab>Contact Us</Tab>
            </TabList>
            <TabPanel>
              <p>{details.restaurant_name}</p>
            </TabPanel>
            <TabPanel>
              <h3>{details.address}</h3>
              <p>Contact No: {details.contact_number}</p>
            </TabPanel>
          </Tabs>
          <div>
            <Link
              to={`/listing/${this.state.mealId}`}
              className="btn btn-danger"
            >
              BACK
            </Link>
            <button className="btn btn-success">Proceed</button>
          </div>

          <div className="col-md-12">
            <MenuList
              menudata={this.state.menuList}
              finalOrder={(data) => {
                this.addToCart(data);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  //async await

  async componentDidMount() {
    let restId = this.props.location.search.split("=")[1];
    let response = await axios.get(`${url}/details/${restId}`, {
      method: "GET",
    });
    let menuData = await axios.get(`${url}/menu/${restId}`, { method: "GET" });
    this.setState({ details: response.data[0], menuList: menuData.data });
  }
}
