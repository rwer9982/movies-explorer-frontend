import React from 'react'
import './Preloader.css'

function Preloader({ isVisible }) {
    return (
        <div className={`preloader ${isVisible ? '' : 'preloader_invisible'}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader;
