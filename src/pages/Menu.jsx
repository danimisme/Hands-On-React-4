import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import Layout from "../components/Layout";
import CardMenu from "../components/CardMenu";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const getMenu = () => {
    axios
      .get("https://api.mudoapi.tech/menus?perPage=100")
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
        <div className="menu-header text-center d-flex justify-content-center  align-items-center">
          <h1 className="my-3">Menu</h1>
          <Link to="/add-menu" className="btn btn-success mx-3 my-3">
            Add Menu
          </Link>
        </div>
        <div className="menu-container">
          {menu.map((item) => (
            <CardMenu key={item.id} {...item} />
          ))}
        </div>
      </Layout>
    </>
  );
};
export default Menu;
