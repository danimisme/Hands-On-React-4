import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import Layout from "../components/Layout";

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
    <>
      <Layout>
        <h1 className="d-inline-block mx-auto">Menu</h1>
        <Link to="/add-menu" className="btn btn-success">
          Add Menu
        </Link>
        <div className="menu-container">
          {menu.map((item) => (
            <div key={item.id} className="menu-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <img src={item.imageUrl} />

              <Link to={`/menu/${item.id}`}>
                <button className="button">Detail</button>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};
export default Menu;
