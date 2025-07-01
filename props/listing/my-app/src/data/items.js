import React from 'react';
import etsyData from './etsy.json';

const items = Array.isArray(etsyData)
  ? etsyData.map(item => ({
      listing_id: item.listing_id,
      url: item.url,
      MainImage: item.MainImage ? item.MainImage.url_570xN : null,
      title: item.title,
      currency_code: item.currency_code,
      price: item.price,
      quantity: item.quantity,
    }))
  : [];

export default items;



