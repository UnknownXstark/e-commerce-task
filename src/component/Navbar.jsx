import React, { useState } from "react";
import "./Navbar.css";
import { BsCart } from "react-icons/bs";
import CategoryDropdown from "./CategoryDropdown";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("todays deals");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>STAR EXPRESS</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/">Home</Link>{" "}
          {menu === "Home" ? <hr /> : <></>}
        </li>
        <li onClick={() => {
            setMenu("CategoryDropdown");
          }}>
          <CategoryDropdown />{menu === "CategoryDropdown" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-signup-cart">
        <Link style={{textDecoration:'none'}} to="/signup">
          <button>SignUp</button>
        </Link>
        <Link style={{textDecoration:'none'}} to="/cart">
          <BsCart style={{ fontSize: "30px" }} />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
