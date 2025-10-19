
import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logout successful");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <nav className="flex justify-between items-center py-4 px-5 md:px-10 bg-base-100 shadow-sm relative">
      {/* Left: User email */}
      <div className="text-sm md:text-base text-gray-600">
        {user && user.email}
      </div>

      {/* Middle: Nav links */}
      <div
        className={`${
          menuOpen
            ? "flex flex-col absolute top-16 left-0 w-full bg-white shadow-md p-5 gap-4 md:static md:flex-row md:bg-transparent md:shadow-none md:p-0"
            : "hidden md:flex md:gap-6"
        } text-accent font-medium`}
      >
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/career" onClick={() => setMenuOpen(false)}>
          Career
        </NavLink>
      </div>

      {/* Right: User & Buttons */}
      <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full"
          src={user ? user.photoURL : userIcon}
          alt="User"
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-5 py-2">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-5 py-2">
            Login
          </Link>
        )}

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-2xl text-accent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
