import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import Layout from "../components/Layout";

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
            <div key={item.id} className="menu-card justify-content-between">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <img src={item.imageUrl} />
              <div className="menu-button d-flex justify-content-center gap-3 mt-3">
                <Link to={`/menu/${item.id}`} className="btn btn-secondary">
                  View
                </Link>
                <Link to={`/edit-menu/${item.id}`} className="btn btn-primary">
                  {" "}
                  Edit{" "}
                </Link>
                <Link to={`/delete-menu/${item.id}`} className="btn btn-danger">
                  {" "}
                  Delete{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};
export default Menu;
