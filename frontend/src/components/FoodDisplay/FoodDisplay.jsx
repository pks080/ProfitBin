import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext); // includes static + dynamic

  return (
    <div className='food-display' id='food-display'>
      <h2 className='eco-heading'>♻️ Waste Categories You Can Sell</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || item.category?.toLowerCase() === category.toLowerCase()) {
            return (
              <FoodItem
                key={item._id || index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
