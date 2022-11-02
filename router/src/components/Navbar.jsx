import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className='logo'>Brand-Logo</NavLink>
      <div className="nav-links">
          <NavLink  to="/about" className="link">About</NavLink>
          <NavLink  to="/contact" className="link">Contact</NavLink>
          <NavLink  to="/blog" className="link">Blog</NavLink>
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
