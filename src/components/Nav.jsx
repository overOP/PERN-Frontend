import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import { navData } from "../Data/navData";
//icons
import { MdShoppingCartCheckout } from "react-icons/md";
import { useCart } from "../store/cartStore"; // Import Zustand cart store

const Nav = () => {
  const count = useCart((state) => state.cartCount); // Get cart count from Zustand store

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-900 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <ul className="text-xl font-bold">Brand</ul>
          <ul className="hidden space-x-6 md:flex">
            {navData.map((item, index) => (
              <li key={index} className="text-gray-300 hover:text-gray-400">
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            ))}
            <li className="text-gray-300 hover:text-gray-400">
              <Link to="/cart">
                <div className="relative">
                  <div className="absolute left-5 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500">
                    <p>{count}</p>
                  </div>
                  <MdShoppingCartCheckout size={27} color="white" />
                </div>
              </Link>
            </li>
          </ul>
          <button
            className="text-gray-300 focus:outline-none md:hidden"
            id="menu-button"
            onClick={handleMobileMenuClick}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`flex-col space-y-2 p-4 md:hidden ${mobileMenuOpen ? "" : "hidden"}`}
          id="mobile-menu"
        >
          {navData.map((item, index) => (
            <li key={index} className="text-gray-300 hover:text-gray-400">
              <NavLink to={item.url}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
