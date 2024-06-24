import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  function activeNav(target) {
    setActive(target);
  }
  return (
    <>
      <nav className="navbar">
        <li
          className={active === "Home" ? "active" : ""}
          onClick={() => activeNav("Home")}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={active === "Catalog" ? "active" : ""}
          onClick={() => activeNav("Catalog")}
        >
          <Link to="/catalog">Catalog</Link>
        </li>
        <li
          className={active === "About" ? "active" : ""}
          onClick={() => activeNav("About")}
        >
          <Link to="/about">About Us</Link>
        </li>
        <li
          className={active === "Contact" ? "active" : ""}
          onClick={() => activeNav("Contact")}
        >
          <Link to="/contact">Contact Us</Link>
        </li>
      </nav>
    </>
  );
};

export default Navbar;
