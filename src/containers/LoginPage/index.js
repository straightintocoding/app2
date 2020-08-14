import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";

import { signin, isLoggedInUser } from "../../actions";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

/**
 * @author
 * @function LoginPage
 **/

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if(!auth.authenticated){
  //     dispatch(isLoggedInUser())
  //   }
  // }, []);

  const userLogin = (e) => {
    e.preventDefault();

    if (email == "") {
      alert("Email is required");
      return;
    }
    if (password == "") {
      alert("Password is required");
      return;
    }

    dispatch(signin({ email, password }));
  };

  if (auth.authenticated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div className="body">
        <form onSubmit={userLogin} className="card">
          <h5 className="hd">Login</h5>
          <p className="title">Enter your details below to continue </p>

          <div className="field">
            <i class="fa fa-envelope"></i>

            <input
              required
              name="email"
              className="in"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <br />
          </div>
          <br />

          <div className="field">
            <i class="fa fa-lock"></i>

            <input
              required
              className="in"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <br />
          <button className="login">Login </button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
