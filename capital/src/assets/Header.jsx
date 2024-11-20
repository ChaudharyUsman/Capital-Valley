import React from "react";
import logo from "../assets/img/logo.png"; // Adjust the path if necessary
import {
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  UserCircleIcon,
  MagnifyingGlassIcon, // Import the search icon
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-10">
      {/* Logo */}
      <button className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-10 rounded-full" />
      </button>

      {/* Search Bar */}
      <div className="flex-1 mx-8 flex items-center relative">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <button className="text-gray-600 hover:text-blue-500">
          <HomeIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-600 hover:text-blue-500">
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-600 hover:text-blue-500">
          <BellIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-600 hover:text-blue-500">
          <UserCircleIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
