import React from "react";
import LoginForm from "../components/loginForm";

function Login() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">the BookUp</h1>
          <p className="lead">Buying and selling books made easy.</p>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
