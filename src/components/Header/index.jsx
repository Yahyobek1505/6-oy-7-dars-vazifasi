import React from "react";
import logo from "../../assets/Logo.png";
import "./index.css";
function Header() {
  return (
    <>
      <header className="header">
        <div className="imgLogo">
          <img src={logo} alt="" />
        </div>
        <div className="nav">
        <ul className="menu">
          <li>Home</li>
          <li>About us</li>
          <li>How it works</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <button className="btn">Get Started</button>
        </div>
      </header>
    </>
  );
}

export default Header;
