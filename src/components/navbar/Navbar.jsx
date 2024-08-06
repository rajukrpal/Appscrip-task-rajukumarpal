import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src="../../../public/web/header/Logo.png" alt="Logo" />
          </div>
          <div>
            <div className="text-center bold text-3xl uppercase mb-10">Logo</div>
            <ul className="navbar-links ">
              <li >
                <Link className="text-decoretion-none text-black semebold">Shop</Link>
              </li>
              <li>
                <Link  className="text-decoretion-none text-black semebold">Skills</Link>
              </li>
              <li>
                <Link  className="text-decoretion-none text-black semebold">Stories</Link>
              </li>
              <li>
                <Link  className="text-decoretion-none text-black semebold">About</Link>
              </li>
              <li>
                <Link  className="text-decoretion-none text-black semebold">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-icons">
              <li>
                <img
                  src="../../../public/web/header/search-normal.png"
                  alt=""
                />
              </li>
              <li>
                <img src="../../../public/web/header/heart.png" alt="" />
              </li>
              <li>
                <img src="../../../public/web/header/shopping-bag.png" alt="" />
              </li>
              <li>
                <img src="../../../public/web/header/profile.png" alt="" />
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
