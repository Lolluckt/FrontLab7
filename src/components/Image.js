import React, { useState } from 'react';

function Image() {
    const [imageWidth, setImageWidth] = useState(600);
    const [imageVisible, setImageVisible] = useState(true);

    const addImage = () => {
        setImageVisible(true);
    };

    const resizeImage = (increase) => {
        setImageWidth((prevWidth) => (increase ? prevWidth + 50 : prevWidth - 50));
    };

    const removeImage = () => {
        setImageVisible(false);
    };

    return (
        <div className="image-container">
            {imageVisible && (
                <a href="https://chernigiv-rada.gov.ua/" target="_blank" rel="noopener noreferrer">
                    <img
                        id="chernihiv-image"
                        src="https://lolluckt.github.io/FrontLab7/images/Cherniviv.jpg"
                        alt="Чернігів"
                        width={imageWidth}
                    />
                </a>
            )}
            <div className="image-controls">
                <button onClick={addImage}>Додати зображення</button>
                <button onClick={() => resizeImage(true)}>Збільшити зображення</button>
                <button onClick={() => resizeImage(false)}>Зменшити зображення</button>
                <button onClick={removeImage}>Видалити зображення</button>
            </div>
        </div>
    );
}

export default Image;