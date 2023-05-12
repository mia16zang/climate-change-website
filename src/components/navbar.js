import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed flex items-center justify-between flex-wrap bg-blue-100 p-6 text-black z-50 w-full shadow-lg">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">My Website</span>
      </div>
      <div className="w-full block   flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow flex justify-end">
          <Link
            to="/home"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 mr-4"
          >
            Home
          </Link>
          <Link
            to="/citations"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-500"
          >
            Citations
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
