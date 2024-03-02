import InputForm from "../components/Input/InpurForm";
import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
    tipe: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const payload = {
      name: menu.name,
      description: menu.description,
      imageUrl: menu.imageUrl,
      price: parseInt(menu.price),
      type: menu.tipe,
    };

    console.log(payload);
    axios
      .post("https://api.mudoapi.tech/menu", payload, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <InputForm
            name="name"
            label="Name"
            type="text"
            placeholder="Name"
            handleInput={handleChange}
          />
          <InputForm
            name="description"
            label="Description"
            type="text"
            placeholder="Description"
            handleInput={handleChange}
          />

          <InputForm
            name="imageUrl"
            label="Image Url"
            type="text"
            placeholder="Image"
            handleInput={handleChange}
          />
          <InputForm
            name="price"
            label="Price"
            type="number"
            placeholder="Price"
            handleInput={handleChange}
          />

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="tipe"
              id="main-dish"
              value="main-dish"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="main-dish">
              Main Dish
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="tipe"
              id="beverage"
              value="beverage"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="beverage">
              Beverage
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddMenu;
