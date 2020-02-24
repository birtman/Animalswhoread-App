import React from "react";
import Paw from "./Paw.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-brand">
        <Link to="/" className="nav-text">
          Animals Who Read
        </Link>
        <img src={Paw} className="navbar__brand-img" alt="logo" />
      </div>
      <span className="nav-text-small">The Only NewsFeed For Animals</span>
    </nav>
  );
};

export default Logo;
