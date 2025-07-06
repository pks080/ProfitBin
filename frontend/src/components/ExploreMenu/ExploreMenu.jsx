import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="explore-title">♻️ Choose Your Waste Type</h1>
      <p className="explore-subtext">
        Click a category below to sell your waste and earn money 💰 while helping the planet 🌍.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="explore-menu-item"
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? 'All' : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={category === item.menu_name ? 'active' : ''}
            />
            <p className="menu-label">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="divider" />
    </div>
  );
};

export default ExploreMenu;
