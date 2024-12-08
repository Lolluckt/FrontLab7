import React from 'react';
import '../App.css';

const GoodsCard = ({ image, name, price }) => {
    return (
        <div className="goods-card">
            <img src={image} alt={name} className="goods-card-image" />
            <h3 className="goods-card-title">{name}</h3>
            <p className="goods-card-price">{price} грн</p>
        </div>
    );
};

export default GoodsCard;