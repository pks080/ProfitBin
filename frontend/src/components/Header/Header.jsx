import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      {/* Add a background overlay to make text readable */}
      <div className="header-overlay"></div>

      <div className="header-contents">
        <h2>♻️ Get Paid for Waste with ProfitBin!</h2>
        <p>Recycle garbage 🌿 Earn cash 💸 — Let us collect your waste and turn it into something valuable.<br/>Unlock hidden value in your waste, earn money, and champion a greener world.🌿</p>
        <a href="#explore-menu">
          <button className='buttonwl'>Explore Waste Types</button>
        </a>
      </div>
    </div>
  )
}

export default Header
