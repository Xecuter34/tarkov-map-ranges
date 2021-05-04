import React, { useState, useReducer } from 'react';
import { Row, Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Debug from './components/debug/Debug';

import MapSelect from './components/MapSelect';
import MapDisplay from './components/MapDisplay';

import MapContext from './context/MapContext';
import MapRangeContext from './context/MapRangeContext';
import DebugContext from './context/DebugContext';

import IRange from './interfaces/IRange';
import IDebug from './interfaces/IDebug';

const App = () => {
  const [currentMap, setCurrentMap] = useState<string>('reserve');
  const [mapRanges, setMapRanges] = useState<IRange>({
    one: 100,
    two: 200,
    three: 300,
    four: 400,
    five: 500
  });

  const debugInfo:IDebug = {
    radiusX: 0,
    radiusY: 0,
    radiusPositionX: 0,
    radiusPositionY: 0,
    currentMap: currentMap,
    currentRanges: mapRanges
  };

  const reducer = (state:IDebug, action:any) => {
    const initialState:IDebug = state;
    switch (action.type) {
      case 'map':
        initialState.currentMap = action.value;
        initialState.currentRanges = mapRanges;
      break;
      case 'radius':
        initialState.radiusPositionX = action.value.mouseX;
        initialState.radiusPositionY = action.value.mouseY;
        break;
      case 'log':
        console.log(state.currentMap)
        break;
      default:
        throw new Error('Action not found');
    };
    return initialState;
  };

  const [state, dispatch] = useReducer(reducer, debugInfo);
  
  return (
    <>
      {process.env.REACT_APP_DEBUG_MODE &&
        <Debug state={state} />
      }
      <Navbar />
      <Container fluid>
        <Row style={{paddingTop: '50px'}}>
          <MapContext.Provider value={{currentMap: currentMap, setFunc: setCurrentMap}}>
            <DebugContext.Provider value={Object.assign(debugInfo, { dispatch: dispatch })}>
              <MapSelect />
              <MapRangeContext.Provider value={{mapRanges: mapRanges, setFunc: setMapRanges}}>
                <MapDisplay />
              </MapRangeContext.Provider>
            </DebugContext.Provider>
          </MapContext.Provider>
        </Row>
      </Container>
    </>
  );
}

export default App;
