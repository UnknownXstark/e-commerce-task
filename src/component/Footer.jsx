import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>STAR EXPRESS</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <BsInstagram style={{fontSize: '20px'}}/>
        </div>
        <div className="footer-icons-container">
          <BsPinterest style={{fontSize: '20px'}}/>
        </div>
        <div className="footer-icons-container">
          <BsWhatsapp style={{fontSize: '20px'}}/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Righht Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
