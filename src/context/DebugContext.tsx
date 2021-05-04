import React from 'react';
import IDebug from '../interfaces/IDebug';

const DebugContext = React.createContext<IDebug>({
    radiusX: 0,
    radiusY: 0,
    radiusPositionX: 0,
    radiusPositionY: 0,
    currentMap: '',
    currentRanges: {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0
    },
    dispatch: () => {}
});

export default DebugContext;