import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/home" className="nav-item">
        Home
      </Link>
      <Link to="/menu" className="nav-item">
        Menu
      </Link>

      {access_token ? (
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      ) : (
        <Link to="/login" className="nav-item">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
