import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='home-path'>
      <h1>Online Shopeee</h1>
      </Link>
        <Link to='/logout'>
        <button className='logout-btn'>Log Out</button>
        </Link>
    </header>
  )
}

export default Header
