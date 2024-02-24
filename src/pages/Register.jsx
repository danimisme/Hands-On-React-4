import Navbar from "../components/Navbar";
import InputForm from "../components/Input/InpurForm";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="register-container">
        <h1>Register</h1>
        <form className="register-form">
          <InputForm
            name="fullName"
            label="Full Name"
            type="text"
            placeholder="Name"
          />
          <InputForm
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
          />
          <InputForm
            name="username"
            label="Username"
            type="text"
            placeholder="Username"
          />
          <InputForm
            name="password"
            label="Password"
            type="password"
            placeholder="*******"
          />
          <button
            className="btn"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Login
          </button>
        </form>
        <p>
          Sudah punya akun ? <a href="/login">Login</a>
        </p>
      </div>
    </>
  );
};

export default Register;
