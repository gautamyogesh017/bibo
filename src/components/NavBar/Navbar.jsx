import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // import search icon
import "./Navbar.css"; // import CSS styles for navbar

function Navbar() {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1>BiBO</h1>
      </div>
      <div className="navbar__middle">
        <form className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <div className="category-list">
          <button onClick={toggleCategories}>Categories</button>
          {showCategories && (
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          )}
        </div>
      </div>
      <div className="navbar__right">
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Log In</button>
      </div>
    </nav>
  );
}

export default Navbar;
