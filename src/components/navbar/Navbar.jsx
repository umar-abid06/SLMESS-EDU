import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo-slmess-edu" className="logo" />
      <ul className={`${mobileMenu ? "" : "hide-mobile-menu"}`}>
        <li>
          <Link to="hero" offset={0} smooth="true">
            Home
          </Link>
        </li>
        <li>
          <Link to="program" offset={-260} smooth="true">
            Program
          </Link>
        </li>
        <li>
          <Link to="about" offset={-150} smooth="true">
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" offset={-260} smooth="true">
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" offset={-260} smooth="true">
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" offset={-220} smooth="true" className="btn">
            Contact Us{" "}
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="menu-icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
