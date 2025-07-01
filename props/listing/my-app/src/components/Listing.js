import React from "react";
import items from '../data/items';

const currencySymbols = {
  USD: '$',
  GBP: '£',
  AUD: 'AUD ',
  EUR: '€',
  CAD: 'CAD ',
};

function Listing() {
  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.MainImage || 'https://via.placeholder.com/150'} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">
              {currencySymbols[item.currency_code] || item.currency_code} {item.price}
            </p>
            <p className="item-quantity level-medium">{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listing;
