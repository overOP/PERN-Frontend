import React, { useState } from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div>
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="text-xl font-bold">Brand</ul>
          <ul className="hidden md:flex space-x-6">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Services">Services</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/SignUp">SignUp</NavLink></li>
          </ul>
          <button className="md:hidden text-gray-300 focus:outline-none" id="menu-button" onClick={handleMobileMenuClick}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`md:hidden flex-col space-y-2 p-4 ${mobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
          <li className="block text-center text-gray-300 hover:text-gray-400">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="block text-center text-gray-300 hover:text-gray-400">
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="block text-center text-gray-300 hover:text-gray-400">
            <NavLink to="/Services">Services</NavLink>
          </li>
          <li className="block text-center text-gray-300 hover:text-gray-400">
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li className="block text-center text-gray-300 hover:text-gray-400">
            <NavLink to="/SignUp">SignUp</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
