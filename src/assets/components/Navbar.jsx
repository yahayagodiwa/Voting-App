import { useState } from 'react';
// import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
     <nav className="absolute top-0 left-0 right-0 bg-black text-white p-4 z-20"> 
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">Voting Platform</div>
    
              <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <button className="text-white p-2">☰</button>
              </div>
    
            
              <ul className={`lg:flex lg:space-x-8 ${isOpen ? 'block absolute top-16 bg-black w-full left-0 py-4 px-5' : 'hidden'} lg:flex`}>
                <li><Link to="/vote" className="hover:text-yellow-400">Vote</Link></li>
                <li><Link to="/users" className="hover:text-yellow-400">Users</Link></li>
                <li><Link to="/total" className="hover:text-yellow-400">Total Votes</Link></li>
                <li><Link to="/register" className="hover:text-yellow-400">Register</Link></li>
              </ul>
            </div>
          </nav>
  )
}

export default Navbar