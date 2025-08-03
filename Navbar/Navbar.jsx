import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // Function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  // Function to remover navBar
  const removeNav = () => {
    setActive("navBar");
  };
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <img src={logo} alt="HOGONA" style={{ height: "70px"}} />
            {/* Optionally keep the text */}
            {/* <h1>HOGONA</h1> */}
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/home" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="/packages" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="/shop" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="/about" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="/pages" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="/news" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="/contact" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="/book">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
