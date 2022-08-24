import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/list-users">
              List Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-user">
              Add User
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
