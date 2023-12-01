import React from "react";
import "./mix.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();

  const setVal = (e) => {
    const { name, value } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      alert("Please enter your email");
    } else if (!email.includes("@")) {
      alert("Please enter valid email");
    } else if (password === "") {
      alert("Please enter your password");
    } else if (password.length < 6) {
      alert("Password must be 6 characters long");
    } else {
      // console.log("User loged in successfully")

      const data = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const res = await data.json();
      // console.log(res)

      if (res.status === 201) {
        localStorage.setItem("usersdatatoken", res.result.token);
        history("/dash");
        setInpval({ ...inpval, email: "", password: "" });
      }
    }
  };

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
                value={inpval.email}
                onChange={setVal}
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
                  value={inpval.password}
                  onChange={setVal}
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
            <button className="btn" onClick={loginUser}>
              Login
            </button>
            <p>
              Dont't have an Account?{" "}
              <NavLink to={"/register"}>Sign up</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
