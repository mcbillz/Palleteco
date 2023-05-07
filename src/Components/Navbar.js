import React from "react";
import "../CSS/Navbar.css";
import Logo from "../Images/Logo.png";
import { BoarderGreenBtn, GreenBtn } from "./Btns";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#">Home </a>
        <a href="#">Browse listings</a>
      </div>
      <div className="nav-buttons">
        <a href="#">
          <GreenBtn text="Create account" />
        </a>
        <a>
          <BoarderGreenBtn text="login" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
