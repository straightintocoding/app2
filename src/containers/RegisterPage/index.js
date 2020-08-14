import React, { useState } from "react";
import Layout from "../../components/Layout";

import { signup } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

/**
 * @author
 * @function RegisterPage
 **/

const RegisterPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const registerUser = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password
    };

    dispatch(signup(user));
  };

  if (auth.authenticated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div className="body">
        <form onSubmit={registerUser} className="card">
          <h5 className="hd">Sign Up</h5>
          <p className="title">Enter your details below to continue </p>

          <div className="field">
            <i class="fa fa-envelope"></i>

            <input
              required
              className="in"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <br />
          </div>
          <br />

          <div className="field">
            <i class="fa fa-envelope"></i>

            <input
              required
              className="in"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <br />
          </div>
          <br />

          <div className="field">
            <i class="fa fa-envelope"></i>

            <input
              required
              className="in"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
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
          <button className="login">Sign Up </button>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterPage;
