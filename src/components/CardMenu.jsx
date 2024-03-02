import axios from "axios";
import { Link } from "react-router-dom";
const CardMenu = (props) => {
  const { id, name, description, imageUrl } = props;
  const token = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleDelete = () => {
    axios
      .delete(`https://api.mudoapi.tech/menu/${id} `, config)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div key={id} className="menu-card justify-content-between">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={imageUrl} />
      <div className="menu-button d-flex justify-content-center gap-3 mt-3">
        <Link to={`/menu/${id}`} className="btn btn-secondary">
          View
        </Link>
        <Link to={`/edit-menu/${id}`} className="btn btn-primary">
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardMenu;
