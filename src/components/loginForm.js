import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "./Form";
import API from "../utils/API";

// import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Creating a login function to appear in the UI
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //seting private info
  const [privateInfo] = useState({});

  function handleLoginSubmit(event) {
    event.preventDefault();
    API.login(email, password).then(response => {
      setIsLoggedIn(true);
      window.location.pathname = "/post"
      // axios.get("/api/user/dashboard")
      // .then(response => {
      //   setPrivateInfo({ secret: response.data });
      // });
    });
    // axios.post("/api/auth/login", { email, password }).then(response => {
    //     axios.get("/api/user/dashboard").then(response => {
    //         setPrivateInfo({ secret: response.data })
    //     })
    //     setIsLoggedIn(true);
    // });
  }

  //   function handleLogoutSubmit(event) {
  //     event.preventDefault();
  //     API.logout().then(response => {
  //       setIsLoggedIn(false);
  //     });
  // axios.get("/api/auth/logout").then(response => {
  //     setIsLoggedIn(false);
  // });
  //   }

  function renderPrivateSection() {
    if (isLoggedIn) {
      return (
        <div>
          {privateInfo.secret}
        </div>
      );
    }
  }

  return (
    <div>
      <div className="container">
        <form className="login">
          <div className="form-group">
            <Input
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
              type="email"
              id="email-input"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <Input
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
              type="password"
              id="password-input"
              placeholder="Password"
            />
          </div>

          <FormBtn type="submit" onClick={handleLoginSubmit}>
            Login
            </FormBtn>

          <div className="btn btn-md">
            <Link to="/signup">
              <div className="login-signup">Sign Up</div>
            </Link>
          </div>

        </form>
      </div>
      {/* Testing out a small a dashboard div to appear when use signs in */}
      <div>{renderPrivateSection()}</div>
    </div>
  );
}

export default LoginForm;
