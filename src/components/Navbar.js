import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiWeightLiftingUp } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-purple-500 to-indigo-500 z-50 text-white body-font">
      <div className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center">
            <GiWeightLiftingUp className="text-3xl mr-2" />
            <span className="text-xl font-bold">Exer-Tracker</span>
          </div>
        </Link>
        <div className="flex items-center md:hidden">
          {isMenuOpen ? (
            <button
              onClick={handleMenuClick}
              className="text-white focus:outline-none"
            >
              <AiOutlineClose className="text-2xl" />
            </button>
          ) : (
            <button
              onClick={handleMenuClick}
              className="text-white focus:outline-none"
            >
              <HiMenuAlt3 className="text-2xl" />
            </button>
          )}
        </div>
        <nav className="hidden md:flex md:flex-row  md:items-center md:justify-end">
          <Link to="/exercises">
            <a className="mx-4 hover:text-gray-200">Exercise Log</a>
          </Link>
          <Link to="/create">
            <a className="mx-4 hover:text-gray-200">Create Exercise</a>
          </Link>
          <Link to="/user">
            <a className="mx-4 hover:text-gray-200">Create User</a>
          </Link>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-purple-500 to-indigo-500 sticky top w-full left-0 px-4 pt-4 pb-8">
          <Link to="/exercises">
            <a
              onClick={handleMenuClick}
              className="mx-4 hover:text-gray-200 font-bold text-gray-200 border-b-2 border-white pb-2"
            >
              Exercise Log
            </a>
          </Link>
          <Link to="/create">
            <a
              onClick={handleMenuClick}
              className="mx-4 hover:text-gray-200 font-bold text-gray-200 border-b-2 border-white pb-2"
            >
              Create Exercise
            </a>
          </Link>
          <Link to="/user">
            <a
              onClick={handleMenuClick}
              className="mx-4 hover:text-gray-200 font-bold text-gray-200 border-b-2 border-white pb-2"
            >
              Create User
            </a>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
