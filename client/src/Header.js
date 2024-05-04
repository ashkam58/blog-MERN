import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
<header>
        <Link to="/" className="logo">
          Deshi
        </Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link href="">Register</Link>
        </nav>
      </header>  )
}

export default Header