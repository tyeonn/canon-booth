import React from 'react';

function PresetItem(prop) {

    return (
        <div className="preset-image-container">
            <img alt="" className="preset-image" src={prop.url}/>
            <div className="preset-details">
                <h1 className="preset-title">{prop.title}</h1>
                <div className="red-line"></div>
                <p className="preset-description">{prop.description}</p>
            </div>
        </div>
    )
}

export default PresetItem;