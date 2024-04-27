import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md flex items-center justify-between px-4">
      {/* Brand Name (Left) */}
      <h1 className="text-xl font-bold text-gray-800">TrackIt</h1>

      {/* Login/Signup Options (Right) */}
      <ul className="flex space-x-4">
        <li className="text-gray-600 font-medium hover:text-blue-500 cursor-pointer"><Link to="/auth/login">Login</Link></li>
        <li className="text-gray-600 font-medium hover:text-blue-500 cursor-pointer"><Link to="/auth/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
