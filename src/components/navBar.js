import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./navBar.css";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function handleLogoutSubmit(event) {
    event.preventDefault();
    API.logout()
      .then(response => {
        if (isLoggedIn) {
          setIsLoggedIn(false);
          window.location.pathname = "/";
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <nav className="navbar navbar-dark">
      <a href="/" className="navbar-brand" id="nameTag">
        the BookUp
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/post"
              className={
                window.location.pathname === "/post"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sell Your Book
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/display"
              className={
                window.location.pathname === "/display"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Books For Sale
            </Link>
          </li>
          <li className="nav-item">
            <button id="sign-out" type="submit" onClick={handleLogoutSubmit}>
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
