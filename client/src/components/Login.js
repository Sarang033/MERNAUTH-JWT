import React from "react";
import "./mix.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are glad you are back. Please login.</p>
          </div>
          <form>
            
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              ></input>
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                ></input>
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
              
            </div>
            <button className="btn">Login</button>
            <p>Dont't have an Account? <NavLink to={"/register"}>Sign up</NavLink></p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
