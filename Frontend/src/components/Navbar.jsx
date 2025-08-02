import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full ">
        <nav className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center space-x-8">
            <div className="w-[80px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 102 28"
                role="img"
                aria-hidden="true"
              >
                <path
                  fill="var(--nav-logo)"
                  d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
                ></path>
                <path
                  fill="var(--nav-logo)"
                  d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
                ></path>
                <polygon
                  fill="var(--nav-logo)"
                  points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
                ></polygon>
                <path
                  fill="var(--nav-logo)"
                  d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
                ></path>
                <path
                  fill="var(--nav-logo)"
                  d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
                ></path>
              </svg>
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
            <button className="bg-green-800 hover:bg-green-900 cursor-pointer  text-white px-5 py-2 rounded-md text-md">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
