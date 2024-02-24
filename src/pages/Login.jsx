import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputForm from "../components/Input/InpurForm";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");

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

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        setNotif("Login Berhasil");
        const token = res?.data?.data?.token;
        if (token) {
          setTimeout(() => {
            navigate("/menu");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
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
          <button className="btn" type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
