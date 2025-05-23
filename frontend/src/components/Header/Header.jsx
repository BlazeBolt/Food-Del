import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favorite Food Here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
      
    </div>
  )
}

export default Header
