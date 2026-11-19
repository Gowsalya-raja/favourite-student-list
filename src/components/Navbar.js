
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function Navbar() {

  const { favourites } = useContext(StudentContext);

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <span className="logo-icon">🎓</span>
        <span>StudentHub</span>
      </Link>

      <div className="nav-links">

        <Link to="/" className="nav-link">
          Students
        </Link>

        <Link to="/favourites" className="nav-link favourite-link">
          <span>♥</span> Favourites

          <span className="count">
            {favourites.length}
          </span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
