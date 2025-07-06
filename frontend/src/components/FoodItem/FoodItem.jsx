import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  // Helper: decide image source (static, full URL, or backend)
  const getImageSrc = () => {
    if (!image) return assets.default_image || ''; // fallback image (optional)
    if (typeof image !== 'string') return image;
    if (image.startsWith('http') || image.startsWith('data:') || image.includes('assets')) {
      return image;
    }
    return `${url}/images/${image}`;
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img
          className='food-item-image'
          src={getImageSrc()}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = assets.metal || ''; // fallback image if load fails
          }}
        />
        {!cartItems[id] ? (
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
            <p className='cartitemsp'>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add More" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className='namewe'>{name}</p>
          <img className='ratingstars' src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">💰 {price} /kg</p>
      </div>
    </div>
  );
}

export default FoodItem;
