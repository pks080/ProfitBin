import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <div className='app-download-left'>
        <img className="admin-img" src={assets.admin} alt='admin' />
      </div>
      <div className='app-download-right'>
          <div className="waste-bot-section">
          <h1>♻️ If you have waste that isn't listed above, feel free to chat with our bot for help!</h1>
          <a href="https://famous-taiyaki-189657.netlify.app/" className="chatbot-button" target='blank'>💬 Chat with Bot</a>
          </div>
        <p className='pforbetter'>
          For Better Experience <br /> Download ProfitBin App
        </p>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="Play Store" />
          <img src={assets.app_store} alt="App Store" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
