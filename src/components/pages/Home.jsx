import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";
import { commonLinks } from "../data/sitedata.js";
import { Header } from "../components/Header";
export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <h1>Home</h1>
    </React.Fragment>
  );
};

export default Home;
