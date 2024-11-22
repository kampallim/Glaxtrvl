import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "../../assests/facebook.png";
import insta from "../../assests/insta.png";
import twitter from "../../assests/twitter.png";
const Footer = () => {
  const social = [facebook, insta, twitter];
  return (
    <footer>
      <h1>GLX TRVL</h1>
      <div className="links">
        <h2> UseFul links</h2>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/training">Training</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="social">
        {social.map((item) => {
          return <img src={item} alt="" />;
        })}
      </div>
    </footer>
  );
};

export default Footer;
