import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const history = useHistory();
  const [login, setLogin] = useState({
    name: "",

    email: "",

    password: "",
  });

  const signUpForm = (e) => {
    e.preventDefault();

    let loginData = localStorage.getItem("loginDetails");

    if (loginData == null) {
      loginData = [];

      loginData.push(loginDetails);

      // localStorage.setItem("loginDetails",JSON.stringify(login));
    } else {
      // let data = JSON.parse(loginData);

      localStorage.setItem("loginDetails", JSON.stringify(login));
    }
    alert("Acount Successfully Created! Login to Continue");
    history.push("/login");
  };

  return (
    <div className="Signup">
      <Link to="/">
        <img
          className="Signup__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="Signup_container">
        <h1>Sign Up</h1>
        <form onSubmit={signUpForm}>
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={login.name}
            onChange={(e) => {
              setLogin({ ...login, [e.target.name]: e.target.value });
            }}
          />

          <label>E-mail</label>

          <input
            type="email"
            name="email"
            value={login.email}
            onChange={(e) => {
              setLogin({ ...login, [e.target.name]: e.target.value });
            }}
          />

          <label>password</label>

          <input
            type="password"
            name="password"
            value={login.password}
            onChange={(e) => {
              setLogin({ ...login, [e.target.name]: e.target.value });
            }}
          />
          <div className="Signup_Checkbox">
            <input type="checkbox" name="signup" />
            <label>Agree Terms and Conditions.</label>
          </div>
          {/* <Link to='/login'> */}
          <button className="Signup_Button">signup</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
