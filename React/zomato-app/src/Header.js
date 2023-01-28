import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div id="brand">Zomato App</div>

      <div id="social">
        <button className="btn btn-success">
          <span className="	glyphicon glyphicon-log-in"></span>LogIn
        </button>
        <button>
          <span className="	glyphicon glyphicon-user"></span>SignUp
        </button>
      </div>
    </header>
  );
};

export default Header;
