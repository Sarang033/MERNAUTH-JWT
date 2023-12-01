import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();
    if (data.status === 401 || !data) {
      history("*");
    } else {
      console.log("User verified");
      history("/dash");
    }
  };

  useEffect(() => {
    DashboardValid();
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="./img1.png"
          style={{ width: "200px", marginTop: 20 }}
          alt=""
        />
        <h1>User Email:sarang@gmail.com</h1>
      </div>
    </>
  );
};

export default Dashboard;
