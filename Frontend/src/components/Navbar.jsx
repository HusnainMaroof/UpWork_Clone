import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full ">
        <nav className="flex items-center justify-between side_padding">
          <div className="flex items-center space-x-8">
            <div className="w-[80px]">
              <img src="/svgs/logo.svg" alt="" width={100} />
            </div>

            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700 font-medium">
              <div className="group relative">
                <button className="hover:text-black">Find talent ▾</button>
              </div>
              <div className="group relative">
                <button className="hover:text-black">Find work ▾</button>
              </div>
              <div className="group relative">
                <button className="hover:text-black">Why Upwork ▾</button>
              </div>
              <div className="group relative">
                <button className="hover:text-black">What’s new ▾</button>
              </div>
              <a href="#" className="hover:text-black">
                Enterprise
              </a>
              <a href="#" className="hover:text-black">
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm font-medium">
            <a href="#" className="text-gray-700 hover:text-black">
              Log in
            </a>
            <Link to="FirstSignUpScreen">
              <h3 className="bg-green-800 hover:bg-green-900 cursor-pointer  text-white px-5 py-2 rounded-md text-md">
                Sign up
              </h3>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
