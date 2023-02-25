import { BrowserRouter, Route } from "react-router-dom";
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
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
