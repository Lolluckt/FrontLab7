import React from 'react';
import GoodsCard from './GoodsCard';

const Gallery = () => {
    const goods = [
        { id: 1, image: '/FrontLab7/images/1.jpg', name: 'Товар 1', price: 200 },
        { id: 2, image: '/FrontLab7/images/2.jpg', name: 'Товар 2', price: 300 },
        { id: 3, image: '/FrontLab7/images/3.jpg', name: 'Товар 3', price: 400 },
        { id: 4, image: '/FrontLab7/images/4.jpg', name: 'Товар 4', price: 500 },
        { id: 5, image: '/FrontLab7/images/5.jpg', name: 'Товар 5', price: 600 },
        { id: 6, image: '/FrontLab7/images/6.jpg', name: 'Товар 6', price: 700 },
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