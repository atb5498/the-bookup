import React, { useState } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "./Form";
import { Link } from "react-router-dom";

// import axios from "axios"

function SignUpForm() {
  //Setting up signup forms state
  // const [formObject, setFormObject] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handles updating the component state while user is typing
  // function handleInputChange(event) {
  // const { name, value } = event.target;
  // setFormObject({ ...formObject, [name]: value })
  // };

  //When the form is submitted, use the API.saveUser method to save the user to the database
  function handleFormSubmit(event) {
    event.preventDefault();
    API.signup(email, password).then(response => { window.location.pathname = "/" });
    // axios.post("/api/auth/signup", {email, password}).then(response => console.log(response.data));

    // if (formObject.email && formObject.password) {
    //   API.saveUser({
    //     email: formObject.email,
    //     password: formObject.password
    //   })
    //     .catch(err => console.log(err));
    // }
  }


  return (
    <div className="container">
      <form className="signup">
        <div className="form-group">
          <Input
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
            type="email"
            name="email"
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
            name="password"
            id="password-input"
            placeholder="Password"
          />
        </div>
        <div
          style={{ display: "none" }}
          id="alert"
          className="alert alert-danger"
          role="alert"
        >
          <span
            className="glyphicon glyphicon-exclamation-sign"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Error:</span> <span className="msg"></span>
        </div>
        <FormBtn type="submit" onClick={handleFormSubmit}>
          Sign Up
          </FormBtn>
        <div className="btn btn-md">
          <Link to="/">
            <div className="login-signup">Login</div>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
