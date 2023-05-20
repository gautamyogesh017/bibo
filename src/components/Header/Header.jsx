import React from "react";
import Login from "../../pages/Auth/login";
import Register from "../../pages/Auth/register";
import Logo from "./Logo";
import Searchbar from "./searchBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Searchbar />
      <Login /> /
      <Register />
    </div>
  );
};

export default Header;
