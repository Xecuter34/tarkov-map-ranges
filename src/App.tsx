import React, { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import Navbar from './components/Navbar';

import MapSelect from './components/MapSelect';
import MapDisplay from './components/MapDisplay';

import MapContext from './context/MapContext';
import MapRangeContext from './context/MapRangeContext';

import IRange from './interfaces/IRange';

const App = () => {
  const [currentMap, setCurrentMap] = useState<string>('reserve');
  const [mapRanges, setMapRanges] = useState<IRange>({
    one: 100,
    two: 200,
    three: 300,
    four: 400,
    five: 500
});
  
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row style={{paddingTop: '50px'}}>
          <MapContext.Provider value={{currentMap: currentMap, setFunc: setCurrentMap}}>
            <MapSelect />
            <MapRangeContext.Provider value={{mapRanges: mapRanges, setFunc: setMapRanges}}>
              <MapDisplay />
            </MapRangeContext.Provider>
          </MapContext.Provider>
        </Row>
      </Container>
    </>
  );
}

export default App;
