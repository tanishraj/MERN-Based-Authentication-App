import React from "react";
import { Link } from "react-router-dom";
import Router from "./router/routes";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const logout = () => {
    axios
      .get("http://localhost:4000/api/logout", { withCredentials: true })
      .then((res) => {
        console.log("Logged out", res.data);
      });
  };

  return (
    <div className="App container my-4">
      <div className="btn-group d-flex" role="group" aria-label="Basic example">
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
        <Link to="/profile" className="btn btn-primary">
          Profile
        </Link>
        <Link to="/register" className="btn btn-primary">
          Register
        </Link>
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <button onClick={logout} className="btn btn-primary">
          Logout
        </button>
      </div>
      <Router />
    </div>
  );
}

export default App;
