import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-logo flex item-center" style={{ gap: 10 }}>
            <button className="navbar-menu-button" onClick={toggleMenu}>
              <FiMenu size={30} />
            </button>
            <img src="/web/header/Logo.png" alt="Logo" />
          </div>
          <div>
            <div className="text-center bold text-3xl uppercase  mb-nav-10">
              Logo
            </div>
            <ul className="navbar-links ">
              <li>
                <Link className="text-decoretion-none text-black semebold">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="text-decoretion-none text-black semebold">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="text-decoretion-none text-black semebold">
                  Stories
                </Link>
              </li>
              <li>
                <Link className="text-decoretion-none text-black semebold">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-decoretion-none text-black semebold">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-icons">
              <li>
                <img src="/web/header/search-normal.png" alt="" />
              </li>
              <li>
                <img src="/web/header/heart.png" alt="" />
              </li>
              <li>
                <img src="/web/header/shopping-bag.png" alt="" />
              </li>
              <li>
                <img src="/web/header/profile.png" alt="" />
              </li>
              <li>
                <select name="" id="">
                  <option value="">ENG</option>
                  <option value="">Hindi</option>
                </select>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
