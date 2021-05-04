import React, { useEffect, useContext } from 'react';

import MapRangeContext from '../../context/MapRangeContext';

import reserve from '../../images/maps/reserve.png'

const MapReserve = () => {
    const RangeContext = useContext(MapRangeContext);

    useEffect(() => {
        RangeContext.setFunc({
            one: 100,
            two: 200,
            three: 300,
            four: 400,
            five: 500
        });
    }, []);

    return (
        <img id='map-display' src={reserve} style={{height: '100%'}} />
    );
};

export default MapReserve;