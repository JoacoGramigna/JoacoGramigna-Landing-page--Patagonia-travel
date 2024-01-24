import React from "react";
import "./Footer.css";

import Logo from "../../assets/PatagoniaTravelLogo.png";

const Footer = () => {
  return (
    <footer className="backgroundFooter">
      <div className="blurBackground"></div>
      <div className="content">
        <div className="socialLinks">
          <div className="socialIcons">
            <i>Youtube</i>
            <i>Facebook</i>
            <i>Instagram</i>
            <i>Twitter</i>
          </div>
        </div>
        <div className="footerInformation">
          <img src={Logo} alt="Patagonia Travel logo" />
          <p>La mejor empresa de viajes a la Patagonia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
