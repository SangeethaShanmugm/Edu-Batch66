import React, { Component } from "react";

const url = "http://localhost:8080/menuItem";
const purl = "http://localhost:8080/placeOrder";

export default class PlaceOrder extends Component {
  constructor(props) {
    super(props);
    let sessionData = sessionStorage.getItem("userInfo")
      ? sessionStorage.getItem("userInfo").split(",")
      : [];
    this.state = {
      id: Math.floor(Math.random() * 10000),
      hotel_name: this.props.match.params.restName,
      name: sessionData ? sessionData[0] : "",
      email: sessionData ? sessionData[1] : "",
      cost: 0,
      phone: sessionData ? sessionData[2] : "",
      address: "Sec 2",
      menuItem: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="orderItems" key={item.menu_id}>
            <img src={item.menu_image} alt={item.menu_name} />
            <h3>{item.menu_name}</h3>
            <h4>Rs. {item.menu_price}</h4>
          </div>
        );
      });
    }
  };

  checkout = () => {
    let obj = this.state;
    obj.menuItem = sessionStorage.getItem("menu");
    fetch(purl, {
      // 3 steps, method -POST, body, headers -JSON
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        accept: "application/json ",
        "content-type": "application/json",
      },
    }).then(console.log("Order Added"));
  };

  render() {
    return (
      <div>
        <center>
          <h2>Login First to Place Booking</h2>
        </center>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>{this.state.hotel_name}</h3>
            </div>
            <div className="panel-body">
              <form action="http://localhost:8000/paynow" method="POST">
                <div className="row">
                  <input type="hidden" name="cost" value={this.state.cost} />
                  <input type="hidden" name="id" value={this.state.id} />
                  <input
                    type="hidden"
                    name="hotel_name"
                    value={this.state.hotel_name}
                  />
                  <div className="form-group col-md-6">
                    <label for="fname" className="control-label">
                      FirstName
                    </label>
                    <input
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="email" className="control-label">
                      Email
                    </label>
                    <input
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="phone" className="control-label">
                      Phone
                    </label>
                    <input
                      className="form-control"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="address" className="control-label">
                      Address
                    </label>
                    <input
                      className="form-control"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.renderItem(this.state.menuItem)}
                <div className="row">
                  <div className="col-md-12">
                    <h2>Total Price is Rs. {this.state.cost}</h2>
                  </div>
                </div>
                <button className="btn btn-success" onClick={this.checkout}>
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

    // return (
    //   <>

    //   </>
    // );
  }

  componentDidMount() {
    let menuId = sessionStorage.getItem("menu");
    let orderId = [];
    menuId.split(",").map((item) => {
      orderId.push(parseInt(item));
      return "ok";
    });
    fetch(url, {
      // 3 steps, method -POST, body, headers -JSON
      method: "POST",
      body: JSON.stringify(orderId),
      headers: {
        accept: "application/json ",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let totalPrice = 0;
        data.map((item) => {
          totalPrice = totalPrice + parseFloat(item.menu_price);
          return "success";
        });
        this.setState({ menuItem: data, cost: totalPrice });
      });
  }
}
