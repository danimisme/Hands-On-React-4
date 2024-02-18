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
    </nav>
  );
};

export default Navbar;
