import React from 'react';
import GoodsCard from './GoodsCard';

const Gallery = () => {
    const goods = [
        { id: 1, image: '/images/1.jpg', name: 'Перець', price: 200 },
        { id: 2, image: '/images/2.jpg', name: 'Помідор', price: 500 },
        { id: 3, image: '/images/3.jpg', name: 'Огірок', price: 600 },
        { id: 4, image: '/images/4.jpg', name: 'Кабачок', price: 100 },
        { id: 5, image: '/images/5.jpg', name: 'Баклажан', price: 900 },
        { id: 6, image: '/images/6.jpg', name: 'Гарбуз', price: 50 },
    ];

    return (
        <div className="gallery">
            {goods.map((item) => (
                <GoodsCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    );
};

export default Gallery;