import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/menu" className="nav-item">
        Menu
      </Link>
      <Link to="/login" className="nav-item">
        {" "}
        Login{" "}
      </Link>
    </nav>
  );
};

export default Navbar;
