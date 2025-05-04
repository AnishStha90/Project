import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLogIn, BiUserPlus, BiHeart } from 'react-icons/bi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#fef3c7] text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo */}
        <h1 className="text-xl font-bold text-[#92400e]">FlavorFusion</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:block w-full md:w-auto mt-2 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-base">
            <li>
              <Link to="/" className="hover:text-[#92400e]">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-[#92400e]">Menu</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#92400e]">About</Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-[#92400e]">Contact Us</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#92400e]">Gallery</Link>
            </li>
          </ul>
        </nav>

        {/* Login & Cart Icons */}
        <div className="flex space-x-4 mt-2 md:mt-0 text-xl">
          <Link to="/login" className="hover:text-[#92400e]" title="Login">
            <BiLogIn />
          </Link>
          <Link to="/register" className="hover:text-[#92400e]" title="Register">
            <BiUserPlus />
          </Link>
          <Link to="/cart" className="hover:text-[#92400e]" title="Cart">
            <BiHeart />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
