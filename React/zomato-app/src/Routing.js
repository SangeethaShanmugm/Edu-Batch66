import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./Footer";
import Header from "./Header";
const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/listing/:mealId" element={<Listing />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
