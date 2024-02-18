import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const getMenu = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        setMenu(res.data.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Menu</h1>
      <div className="menu-container">
        {menu.map((item) => (
          <div key={item.id} className="menu-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <img src={item.imageUrl} />

            <Link to={`/menu/${item.id}`}>
              <button className="btn">Detail</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
