import React, { Component } from "react";
import "./header.css";
export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      title: "React App",
      keyword: "User text here",
    };
  }

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value ? event.target.value : "User Text here",
    });
    this.props.userInput(event.target.value);
  };

  render() {
    return (
      <>
        <header>
          <div className="logo">{this.state.title}</div>
          <input onChange={this.handleChange} />
          <div style={{ color: "white", fontSize: "20px" }}>
            {this.state.keyword}
          </div>
        </header>
      </>
    );
  }
}
