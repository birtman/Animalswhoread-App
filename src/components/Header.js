import React from "react";

function Header({ handleChange, handleUserInput }) {
  return (
    <header className="header-hero">
      <div className="App-header jumbotron jumbotron-fluid ">
        <div className="container">
          <h1>Animals Who Read</h1>
        </div>
      </div>
    </header>
  );
}
// <img src={logo} className="App-logo" alt="logo" />

export default Header;
