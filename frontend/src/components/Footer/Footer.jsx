import React from 'react';
import './Footer.css';
import { assets } from '../../../assets/frontend_assets/assets';

const Footer = () => {
    let D = new Date();
    const year  = D.getFullYear();

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus magnam odit aliquid fugiat nam blanditiis natus ipsum accusamus reiciendis iusto, rerum fuga, optio, aut perspiciatis tenetur beatae. Mollitia, nulla quo.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>Contact Developer At</h2>
            <ul>
                <li>+91 7058532404</li>
                <li>ajinkyagavali4@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright {year} &copy; Tomato.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
