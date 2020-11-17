import React from 'react';
import IMapRangeContext from '../interfaces/IMapRangeContext';
import IRange from '../interfaces/IRange';

const MapContext = React.createContext<IMapRangeContext>({
    mapRanges: {one: 100, two: 200, three: 300, four: 400, five: 500},
    setFunc: (mapRanges: IRange) : any => { }
});

export default MapContext;