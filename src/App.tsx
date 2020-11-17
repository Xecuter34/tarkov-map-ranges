import React, { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import Navbar from './components/Navbar';

import MapSelect from './components/MapSelect';
import MapDisplay from './components/MapDisplay';

import MapContext from './context/MapContext';

const App = () => {
  const [currentMap, setCurrentMap] = useState<string>('reserve');
  
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row style={{paddingTop: '50px'}}>
          <MapContext.Provider value={{currentMap: currentMap, setFunc: setCurrentMap}}>
            <MapSelect />
            <MapDisplay />
          </MapContext.Provider>
        </Row>
      </Container>
    </>
  );
}

export default App;
