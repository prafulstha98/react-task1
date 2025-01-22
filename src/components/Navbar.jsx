import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="bg-black text-white flex justify-between px-6 py-4">
      <a href="">Tailwind</a>
      <nav className="flex gap-6">
        <NavLink to="/About">About</NavLink>
        
        <NavLink to="/Contact">Contact</NavLink>
      </nav>
    
    </div>
  )
}
export default Navbar


