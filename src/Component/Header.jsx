import React from "react";
import Navbar from "./Navbar";
import "./Style/header.css"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Link to="/"><span>S</span>tudyNotion</Link>
        </div>
        <Navbar />
        <div className="header-btns-container">
          <Link to="/login"><button className="btn">Login</button></Link>
          <Link to="/signup"><button className="btn">Sign Up</button></Link>
        </div>
      </header>
    </>
  );
};

export default Header;
