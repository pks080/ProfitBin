
import React, { useEffect, useState, useContext, useRef } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false); // ✅ Track profile menu
  const dropdownRef = useRef(null);

  const { getTotalCartAmount, token, setToken, logoutUser } = useContext(StoreContext);
  const navigate = useNavigate();

  // ✅ Logout clears token + cart + closes dropdown
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    logoutUser();
    setShowDropdown(false);
    navigate("/");
  };

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Scroll-linked nav item highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = [
        { id: 'home', range: [0, 400] },
        { id: 'explore-menu', range: [400, 1000] },
        { id: 'app-download', range: [1000, 1600] },
        { id: 'footer', range: [1600, Infinity] }
      ];
      for (const section of sections) {
        if (scrollY >= section.range[0] && scrollY < section.range[1]) {
          setMenu(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Light/Dark toggle
  useEffect(() => {
    const toggle = document.getElementById('visual-toggle');
    const applyMode = () => {
      const mode = localStorage.getItem('mode');
      if (mode === 'light') {
        toggle.checked = true;
        document.body.classList.add('lightcolors');
        document.getElementById('visual-toggle-button').classList.add('lightmode');
      } else {
        toggle.checked = false;
        document.body.classList.remove('lightcolors');
        document.getElementById('visual-toggle-button').classList.remove('lightmode');
      }
    };
    applyMode();
    toggle.addEventListener('change', () => {
      const isLight = toggle.checked;
      localStorage.setItem('mode', isLight ? 'light' : 'dark');
      applyMode();
    });
  }, []);

  return (
    <div className='navbar'>
      <Link to="/" className="logo-link">
        <img src={assets.logo} alt="Logo" className="logo" />
        <span className="logo-text">💰ProfitBin🗑️</span>
      </Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("explore-menu")} className={menu === "explore-menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("app-download")} className={menu === "app-download" ? "active" : ""}>Mobile App</a>
        <a href="#footer" onClick={() => setMenu("footer")} className={menu === "footer" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        {/* Theme toggle */}
        <div className="navbar">
          <label htmlFor="visual-toggle" id="visual-toggle-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="svgIcon-toggle sun-svg" viewBox="0 0 24 24">
              <g fill="#4CAF50"><circle r="5" cy="12" cx="12"></circle><path d="M21 13h-1a1 1 0 010-2h1a1 1 0 010 2zM3 13H2a1 1 0 010-2h1a1 1 0 010 2z" /></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="svgIcon-toggle moon-svg" fill="#4CAF50" viewBox="0 0 384 512">
              <path d="M223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4..." />
            </svg>
            <input type="checkbox" className="visual-toggle" id="visual-toggle" />
          </label>
        </div>

        {/* Cart */}
        <div className="navbar-search-icon">
          <Link to="/cart"><img className="basketlogo" src={assets.basket_icon} alt="Cart" /></Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>

        {/* Sign In or Profile */}
        {!token ? (
          <button className="signbutton" onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile" ref={dropdownRef}>
            <img
              src={assets.profile_icon}
              className="white-filter"
              alt="Profile"
              onClick={() => setShowDropdown(prev => !prev)} // ✅ Toggle dropdown
            />
            {showDropdown && (
              <ul className="nav-profile-dropdown">
                <li onClick={() => { setShowDropdown(false); navigate('/myorders'); }}>
                  <img src={assets.bag_icon} alt="Orders" /><p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="Logout" /><p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

