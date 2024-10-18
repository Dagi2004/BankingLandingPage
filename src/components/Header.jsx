import React, { useState } from "react";
import Button from "./Reusable/Button";

import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Close menu if clicked outside or after navigation
  const handleLinkClick = () => {
    setIsOpenMenu(false);
  };

  return (
    <nav className="bg-white fixed p-6 w-full z-20 shadow-md">
      <div className="w-full flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center ml-10">
          <img src={logo} alt="logo" className="w-32" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-[#323232] font-light items-center">
          {["home", "about", "blog", "contact", "careers"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  spy={true}
                  smooth="true"
                  offset={-50}
                  duration={500}
                  to={item.toLowerCase().replace(" ", "")}
                  className="hover:text-green-500"
                >
                  {item.charAt(0).toLowerCase() + item.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Request Invite Button */}
        <div className="hidden md:block">
          <Button />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle Menu"
            aria-expanded={isOpenMenu}
            className="text-gray-700 focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpenMenu && (
        <ul className="flex flex-col items-center mt-2 space-y-2 text-gray-700 text-base md:hidden px-4">
          {["Home", "About", "Blog", "Contact", "Careers"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="hover:text-green-500"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default Header;
