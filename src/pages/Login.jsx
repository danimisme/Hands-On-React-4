import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/Input/InpurForm";
import Layout from "../components/Layout";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const payload = {
      username: username,
      password: password,
    };

    setLoading(true);

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        setNotif("Login Berhasil");
        const token = res?.data?.data?.token;
        localStorage.setItem("access_token", token);
        setLoading(false);
        console.log(token);
        if (token) {
          setTimeout(() => {
            navigate("/menu");
          }, 2000);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        setNotif(err?.response?.data?.message);
      });
  };

  return (
    <>
      <Layout>
        <div className="login-container">
          <h1>Login</h1>
          <form className="login-form">
            {notif && <p>{notif}</p>}
            <InputForm
              name="username"
              label="Username"
              type="text"
              placeholder="Username"
              handleInput={handleUsernameChange}
            />
            <InputForm
              name="password"
              label="Password"
              type="password"
              placeholder="*******"
              handleInput={handlePasswordChange}
            />
            <button
              disabled={loading ? true : false}
              className="button"
              type="submit"
              onClick={handleLogin}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <p>
            Belum punya akun? <Link to="/register">Register</Link>
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Login;
