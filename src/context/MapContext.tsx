import React from 'react';
import IMapContext from '../interfaces/IMapContext';

const MapContext = React.createContext<IMapContext>({
    currentMap: 'reserve',
    setFunc: (mapName: string) : any => { }
});

export default MapContext;