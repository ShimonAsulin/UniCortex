import React from "react";
import "./footer.scss";
import logo from "../../../images/Tech_Brain_Logo.png";

const Footer = () => {
  return (
      <footer className="footer">
        <img className="footer__img" src={logo} alt="" />
        <h2 className="footer__title">UniCortex</h2>
        <h4 className="footer__title-sub">כל הזכויות שמורות.2023</h4>
      <div className="space"></div>

      </footer>
  );
};

export default Footer;
