import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <hr/>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='tomatologofooter' src={assets.footer_logo} alt="ProfitBin Logo" />
          <p className="footer-description">
            ♻️ <strong>Welcome to ProfitBin!</strong> Turn your waste into wallet-friendly rewards!
            <br />We collect garbage 🗑️ like paper, plastic, e-waste, and more — and pay you to recycle! ♻️💰
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
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
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@ProfitBin.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className='footer-copyright'>
        Copyright 2024 © ProfitBin.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
