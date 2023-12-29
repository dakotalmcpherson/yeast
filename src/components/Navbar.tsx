import { useState } from "react"
import { NavLink } from "react-router-dom"
import '../styles/navbar.css'
import Hamburger from "./Hamburger"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false)

  function handleClick() {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
      <div>
        <NavLink to='/'>LOGO</NavLink>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <Hamburger/>
      </div>
      <div className={`nav-elements ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/events'>Events</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>  
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar