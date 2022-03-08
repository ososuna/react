import React from 'react'

import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-primary bg-primary">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">useContext</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLink
            exact="true"
            className={({ active }) => 'nav-link' + (active ? 'active' : '')}
            to="/"
          >
            Home
            </NavLink>    
          <NavLink
            exact="true"
            className={({ active }) => 'nav-link' + (active ? 'active' : '')}
            to="/about"
          >
            About
            </NavLink>
          <NavLink
            exact="true"
            className={({ active }) => 'nav-link' + (active ? 'active' : '')}
            to="/login"
          >
            Login
            </NavLink>
        </div>
      </div>
    </nav>
  )
}
