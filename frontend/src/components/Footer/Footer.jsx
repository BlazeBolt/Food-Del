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
              <a href="https://www.instagram.com/aj1nkya_.g?igsh=NWt1cjg2aTNrb2ps"><img src={assets.facebook_icon} alt="" /></a>
              <a href="https://x.com/ajinkya_ga41109?t=_h6ldKkZEQQSNEiju9hbjw&s=09"><img src={assets.twitter_icon} alt="" /></a>
              <a href="https://www.linkedin.com/in/ajinkya-gavali-48ab29249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={assets.linkedin_icon} alt="" /></a>
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
