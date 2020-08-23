import React from 'react';
import '../css/map-select.css';

const MapSelect = () => {
    return (
        <div className='map-container'>
            <div className='map-title'>
                Locations
                <span style={{float: 'right'}}>^</span>
            </div>
            <ul className='map-list'>
                <li className='map-item'>Factory</li>
                <li className='map-item'>Woods</li>
                <li className='map-item'>Customs</li>
                <li className='map-item'>Shoreline</li>
                <li className='map-item'>Reserve</li>
            </ul>
        </div>
    );
};

export default MapSelect;