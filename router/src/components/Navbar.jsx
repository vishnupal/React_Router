import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className='logo'>Brand-Logo</Link>
      <div className="nav-links">
          <Link to="/about" className="link">About</Link>
          <Link to="/contact" className="link">Contact</Link>
          <Link to="/blog" className="link">Blog</Link>
      </div>
      {/* <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul> */}
    </nav>


      
    
  )
}

export default Navbar
