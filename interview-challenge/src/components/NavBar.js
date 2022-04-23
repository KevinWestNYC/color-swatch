import React from 'react'
import logoSymbol from '../images/logo-symbol.svg'

export default function NavBar() {
  return (
    <div className="navbar">
        <div className="logo-container">
          <a href="https://www.helpfulhuman.com/">
            <img src={logoSymbol} alt="HH Icon" className="hh-icon"/>
            </a>
        </div>
        <div className="search-container">
            <input type="text" placeholder="Search" className="search-input"/>
        </div>
    </div>
  )
}
