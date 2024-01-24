import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/PatagoniaTravelLogo.png";
import ButtonHamburger from "../ButtonHamburger/ButtonHamburger";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleClick = () => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (screenWidth <= 900) {
      setIsMenuOpen(!isMenuOpen);

      if (!isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    }
  };

  return (
    <header>
      <nav className={isSticky ? "sticky" : "navbar"}>
        <div className="navbarLogo">
          <img src={Logo} alt="" />
        </div>
        <ul className={`links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={handleClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/Informacion" onClick={handleClick}>
              Información
            </Link>
          </li>
          <li>
            <Link to="/Viajes" onClick={handleClick}>
              Viajes
            </Link>
          </li>
          <li>
            <Link to="/Contacto" onClick={handleClick}>
              Contacto
            </Link>
          </li>
        </ul>
        <div className="navbarIcon">
          <ButtonHamburger isMenuOpen={isMenuOpen} onClick={handleClick} />
        </div>
        <div className={`initial ${isMenuOpen ? "active" : ""}`} />
      </nav>
    </header>
  );
};

export default Navbar;
