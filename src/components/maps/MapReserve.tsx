import React, { useEffect, useContext } from 'react';

import MapRangeContext from '../../context/MapRangeContext';

import reserve from '../../images/maps/reserve.png'

const MapReserve = () => {
    const RangeContext = useContext(MapRangeContext);

    useEffect(() => {
        RangeContext.setFunc({
            one: 1000,
            two: 2000,
            three: 3000,
            four: 4000,
            five: 5000
        });
    }, []);

    return (
        <img id='map-display' src={reserve} style={{height: '100%'}} />
    );
};

export default MapReserve;