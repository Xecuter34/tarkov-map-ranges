import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Navbar from './components/Navbar';

import MapSelect from './components/MapSelect';
import MapDisplay from './components/MapDisplay';

const App = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row style={{paddingTop: '50px'}}>
          <MapSelect />
          <MapDisplay />
        </Row>
      </Container>
    </>
  );
}

export default App;
