import React from "react";
import axios from "axios";

const loginData = {};

const LoginForm = () => {
  const changeHandler = (evt) => {
    loginData[evt.target.name] = evt.target.value;
  };

  const submitForm = () => {
    axios
      .post("http://localhost:4000/api/login", loginData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Response for Login", res.data);
      })
      .catch((err) => {
        console.log("Something went wrong in login", err);
      });
  };

  return (
    <div className="container">
      <div className="alert alert-warning text-center my-4">
        Dummy Bootstrap 4 Login Template
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-8 col-xl-6">
          <div className="row">
            <div className="col text-center">
              <h1>Login</h1>
              <p className="text-h3">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.{" "}
              </p>
            </div>
          </div>
          <div className="row align-items-center mt-4">
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row align-items-center mt-4">
            <div className="col">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row justify-content-start mt-4">
            <div className="col">
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" />I Read
                  and Accept{" "}
                  <a href="https://www.froala.com">Terms and Conditions</a>
                </label>
              </div>

              <button className="btn btn-primary mt-4" onClick={submitForm}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
