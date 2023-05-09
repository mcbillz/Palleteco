import { React, useState } from "react";
import "../CSS/Navbar.css";
import Logo from "../Images/Logo.png";
import { BoarderGreenBtn, GreenBtn } from "./Btns";

var dropdownMenuStyle = { display: "none" };

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  if (toggle === true) {
    dropdownMenuStyle = {
      position: "absolute",
      top: "80px",
      width: "100vw",
      backgroundColor: "#fff",
      boxShadow: "0px 40px 80px rgba(170, 170, 170, 0.25)",
      padding: "20px",
      zIndex: "99",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
  } else {
    dropdownMenuStyle = { display: "none" };
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="hamburger-menu" onClick={() => setToggle(!toggle)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="nav-links">
        <a href="#">Home </a>
        <a href="#">Browse listings</a>
      </div>
      <div className="nav-buttons">
        {isRegistered === false ? (
          <>
            <a href="#" key="create-account-btn">
              <GreenBtn text="Create account" />
            </a>
            <a key="login-btn">
              <BoarderGreenBtn text="login" />
            </a>
          </>
        ) : (
          <a key="add-listings-btn">
            <GreenBtn text="Add Listings" />
          </a>
        )}
      </div>

      <div style={dropdownMenuStyle} className="dropdown-menu">
        <div>
          <a href="#">Home</a>
          <a href="#">Browse listings</a>
        </div>
        <div>
          {isRegistered === false ? (
            <>
              <a href="#" key="create-account-btn">
                <GreenBtn text="Create account" />
              </a>
              <a key="login-btn">
                <BoarderGreenBtn text="login" />
              </a>
            </>
          ) : (
            <a key="add-listings-btn">
              <GreenBtn text="Add Listings" />
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
