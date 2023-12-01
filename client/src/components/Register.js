import React from "react";
import { useState } from "react";
import "./mix.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCpassShow] = useState(false);
  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserdata = async (e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = inpval;

    if (fname === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Please enter your email");
    } else if (!email.includes("@")) {
      alert("Please enter valid email");
    } else if (password === "") {
      alert("Please enter your password");
    } else if (password.length < 6) {
      alert("Password must be 6 characters long");
    } else if (cpassword === "") {
      alert("Please enter confirm password");
    } else if (cpassword.length < 6) {
      alert("Password must be 6 characters long");
    } else if (password !== cpassword) {
      alert("Password and confirm password do not match");
    } else {
      //  console.log("User registration done")

      const data = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fname, email, password, cpassword }),
      });

      const res = await data.json();

      if (res.status === 201) {
        alert("User registration done");
        setInpval({
          ...inpval,
          fname: "",
          email: "",
          password: "",
          cpassword: "",
        });
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              we are glad you will be using project AuthMaster to practise{" "}
              <br />
              Authentication! We hope that you like it
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                onChange={setVal}
                value={inpval.fname}
                name="fname"
                id="fname"
                placeholder="Enter your Name"
              ></input>
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setVal}
                value={inpval.email}
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
                  onChange={setVal}
                  value={inpval.password}
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
                  onChange={setVal}
                  value={inpval.cpassword}
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
            <button className="btn" onClick={addUserdata}>
              Sign Up
            </button>
            <p>
              Already have an Account? <NavLink to={"/"}>Log In</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
