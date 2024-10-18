import React from "react";
import Button from "./Reusable/Button";
import backgroundDesktop from "../assets/bg-intro-desktop.svg";
import backgroundMobile from "../assets/bg-intro-mobile.svg";
import mockUpImage from "../assets/image-mockups.png";

const Home = () => {
  return (
    <div className="bg-white" id="home">
      <div className="w-full flex flex-col-reverse md:flex-row items-center py-12 px-6 md:px-24">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#3b3a48] mb-4 ">
            Next generation digital banking
          </h1>
          <p className="text-gray text-md mb-8">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="md:w-1/2 max-w-30">
            <Button />
          </div>
        </div>
        <div className="md:w-1/2 relative ml-9">
          <img
            src={backgroundDesktop}
            alt="background"
            className="absolute top-0 left-0 w-full h-full hidden md:block "
          />
          <img
            src={backgroundMobile}
            alt="background"
            className="absolute top-0 left-0 w-full h-full md:hidden"
          />

          <img
            src={mockUpImage}
            alt="mockup"
            className="relative w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
