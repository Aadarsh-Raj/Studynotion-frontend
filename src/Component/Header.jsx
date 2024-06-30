import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./Style/header.css";
import { Link } from "react-router-dom";
import { StroreFunction } from "../Store/store";
import { FaUserSecret } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";

const Header = () => {
  const { user, setSidebarOpen, token } = StroreFunction();
  const openSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  useEffect(() => {}, [token]);
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <span>S</span>tudyNotion
          </Link>
        </div>
        <nav className="max-navbar">
          <Navbar />
        </nav>
        <div className="header-btns-container">
          {!token ? (
            <>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn">Sign Up</button>
              </Link>
            </>
          ) : (
            <>
              <button className="btn" title="More" onClick={openSidebar}>
                {" "}
                <FaUserSecret />
              </button>
            </>
          )}
        </div>
        <div className="open-nav-btn" title="Open tabs">
          <FaAngleDoubleDown />
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
