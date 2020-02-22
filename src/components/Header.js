import React from "react";
import logo from "./logo.svg";

function Header({ handleChange, handleUserInput }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Animals Who Read</h1>
      <h2>Which Fellow Animal would you like to learn about?</h2>
    </header>
  );
}

export default Header;
