import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedin }) => {
	return (
		<nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md flex items-center justify-between px-4">
			<h1 className="text-xl font-bold text-gray-800">TrackIt</h1>

			{!loggedin? 
			<ul className="flex space-x-4">

				<li className="text-gray-600 font-medium hover:text-blue-500 cursor-pointer"><Link to="/auth/login">Login</Link></li>
				<li className="text-gray-600 font-medium hover:text-blue-500 cursor-pointer">Signup</li>
			</ul>:
			<ul className="flex space-x-4">

				<li className="text-gray-600 font-medium hover:text-blue-500 cursor-pointer"><Link to="/auth/login">Logout</Link></li>
			</ul>}

		</nav>
	);
};

export default Navbar;
