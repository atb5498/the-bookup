import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Post from "./pages/Post";
import Display from "./pages/Display";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/hello").then(result => {
      console.log(result.data);
    });
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/post">
        <Post />
      </Route>
      <Route exact path="/display">
        <Display />
      </Route>
    </Router>
  );
}

export default App;
