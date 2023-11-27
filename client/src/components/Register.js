import React from 'react'
import { useState } from 'react';
import "./mix.css";
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCpassShow] = useState(false);

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{textAlign:"center"}}>we are glad you will be using project AuthMaster to practise <br/>Authentication! We hope that you like it</p>
          </div>
          <form>
          <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Enter your Name"
              ></input>
            </div>
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
            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  type={!cpassShow ? "password" : "text"}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password"
                ></input>
                <div
                  className="showpass"
                  onClick={() => setCpassShow(!cpassShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn">Sign Up</button>
            <p>Already have an Account? <NavLink to={"/"}>Log In</NavLink></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register
