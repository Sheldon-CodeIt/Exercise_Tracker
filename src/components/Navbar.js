import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GiWeightLiftingUp } from 'react-icons/gi';

const Navbar = () => {
  const navigate = useNavigate();
 
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };


  
  return (
    <header className="text-gray-600 mt-5 body-font">
      <div
        className="container mx-auto flex flex-wrap pl-3 pr-3 flex-col md:flex-row items-center"
        bis_skin_checked="1"
      >
        <Link to="/">
          <a className="flex title-font font-medium items-center text-gray-900 mx-2 mb-4 md:mb-0">
            {/* <img
              className="w-12 h-12 text-white "
              src="https://www.tailorbrands.com/wp-content/uploads/2019/04/Artboard-5-copy-9xxxhdpi-1020x1024.png"
              alt="Monitoring"
            /> */}
            <GiWeightLiftingUp className="font-bold text-3xl text-cyan-500"/>
            <span className="ml-3 text-xl">Exer-Tracker</span>
          </a>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/exercises">
            <a href="#" className="mr-5 hover:text-black hover:shadow-sm">
              Exercise Log
            </a>
          </Link>
          <Link to="/createExercise">
            <a href="#" className="mr-5 hover:text-black hover:shadow-sm">
              Create Exercise
            </a>
          </Link>
          <Link to="/user">
            <a href="#" className="mr-5 hover:text-black hover:shadow-sm">
              Create User
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
