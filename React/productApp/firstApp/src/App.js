import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductDisplay from "./ProductDisplay";
import JSON from "./db.json";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      productData: JSON,
      filteredData: JSON,
    };
  }

  filteredData = (keyword) => {
    let output = this.state.productData.filter((data) => {
      return (
        data.name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1
      );
    });
    console.log("Filtered Data", output);
    this.setState({ filteredData: output });
  };

  render() {
    return (
      <>
        <Header
          userInput={(data) => {
            this.filteredData(data);
          }}
        />
        <ProductDisplay prodData={this.state.filteredData} />
        <Footer year="2023" month="Jan" />
      </>
    );
  }
}
