import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import Button from "./Reusable/Button";

const Footer = () => {
  return (
    <footer className="bg-[#2d304f] w-full mt-12 p-10">
      <div className=" mx-auto flex flex-col md:flex-row justify-around items-center  gap-10">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="Easybank Logo" className="mb-4" />
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white text-xl hover:text-green-400">
              <TiSocialFacebook />
            </a>
            <a href="#" className="text-white text-xl hover:text-green-400">
              <IoLogoYoutube />
            </a>
            <a href="#" className="text-white text-xl hover:text-green-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white text-xl hover:text-green-400">
              <FaPinterest />
            </a>
            <a href="#" className="text-white text-xl hover:text-green-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex md:flex-row flex-col md:space-x-8 md:gap-20 gap-1 text-center ">
          <ul className="space-y-2 text-white ">
            <li className="hover:text-green-400 cursor-pointer">About Us</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
            <li className="hover:text-green-400 cursor-pointer">Blog</li>
          </ul>
          <ul className="space-y-2 text-white">
            <li className="hover:text-green-400 cursor-pointer">Careers</li>
            <li className="hover:text-green-400 cursor-pointer">Support</li>
            <li className="hover:text-green-400 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Button and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Button />
          <p className="text-white text-sm font-light mt-4">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
      <div>
        <p className="mt-9 flex justify-center text-white">
          Developed By {"   "}
          <span className="text-blue">
            {"   "}
            <Link
              to="https://github.com/Dagi2004/BankingLandingPage"
              target="blank"
              rel="noopener noreferrer"
            >
              {"   "}
              Dagmawi Milkias {"   "}
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
