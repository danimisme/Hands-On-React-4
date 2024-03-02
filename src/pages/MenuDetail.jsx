import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

const MenuDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const getMenuDetail = () => {
    axios
      .get(
        `
    https://api.mudoapi.tech/menu/${id}`
      )
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenuDetail();
  }, []);

  console.log(detail);

  return (
    <div>
      <Navbar />
      <div className="detail-container">
        <h1>Menu Detail</h1>
        <img src={detail?.imageUrl} alt={detail?.name} />
        <h3>{detail.name}</h3>
        <p>
          <b>Price : </b> {detail?.priceFormatted}
        </p>
        <p>
          <b>type : </b> {detail?.type}
        </p>
        <p>{detail?.description}</p>
        <Link to="/menu">
          <button className="button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default MenuDetail;
