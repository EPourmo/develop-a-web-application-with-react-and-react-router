// import React from "react";
import logo from "../assets/LOGO.png";
import "../styles/components/Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar({ highlight }) {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={logo} alt="logo Kasa" />
        <div className="navbar__lists">
          <Link
            to="/"
            className={
              highlight.home
                ? "navbar__lists-item highlight"
                : "navbar__lists-item"
            }
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className={
              highlight.about
                ? "navbar__lists-item highlight"
                : "navbar__lists-item"
            }
          >
            A Propos
          </Link>
        </div>
      </nav>
    </>
  );
}
