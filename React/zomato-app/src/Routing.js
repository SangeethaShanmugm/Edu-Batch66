import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PlaceOrder from "./components/booking/PlaceOrder";
import ViewOrder from "./components/booking/ViewOrder";
import Details from "./components/details/Details";
import Home from "./components/Home/Home";
import Listing from "./components/Listing/ListingApi";
import Footer from "./Footer";
import Header from "./Header";
const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/listing/:mealId" component={Listing} />
        <Route path="/details" component={Details} />
        <Route path="/placeOrder/:restName" component={PlaceOrder} />
        <Route path="/viewBooking" component={ViewOrder} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
