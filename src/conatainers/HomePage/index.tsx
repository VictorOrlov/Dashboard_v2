import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import LineGraph from '../../components/LineGraph';
import MapLeaflet from '../../components/MapLeaflet';
import CardBoard from '../../components/CardBoard';

const HomePage: React.FC = () => {
  return(
    <Row className='m-0'>
    <Col md={12}>
      <Row className="justify-content-center mt-3 mb-4">
        <Col md={3}>
          <CardBoard incr />
        </Col>
        <Col md={3}>
          <CardBoard dicr />
        </Col>
        <Col md={3}>
          <CardBoard dicr />
        </Col>
        <Col md={3}>
          <CardBoard incr />
        </Col>
      </Row>
    </Col>
    <Col md={12}>
      <Row className="justify-content-center mt-3 mb-4">
        <Col md={4}>
          <LineGraph />
        </Col>
        <Col md={4}>
          <LineGraph />
        </Col>
        <Col md={4}>
          <LineGraph />
        </Col>
      </Row>
    </Col>
      <Col md={8}>
        <LineGraph />
      </Col>
      <Col md={4} >
        <MapLeaflet />
      </Col>
      <Col md={12} className="justify-content-center d-flex">
        <Button>Test Button</Button>
      </Col>
    </Row>
  )
}

export default HomePage;