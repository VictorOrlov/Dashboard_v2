import React from 'react';
import indicators from '../../data_for_dashboard/fake_data.json';
import data from "../../data_for_dashboard/statistics.json";
import { Row, Col, Button } from 'react-bootstrap';
import CardGroup from './CardGroup';
import SecondGroup from './SecondGroup';


const uslugas30Days = data.count_per_date_30_uslugas;
const uslugasRequest30Days = data.count_per_date_30_usluga_requests;
const indic = indicators.fakeIndicators;
const timeUsluga = indicators.fakeTimeUsluga;

const result30days = () => {
  const uslugas = uslugas30Days;
  let result:any = [];
  for(let i = 0; i < uslugas.length; i++){
    result.push({...uslugas[i], "total2": uslugasRequest30Days[i].total});
  }
  return result;
}

console.log(result30days())

const HomePage: React.FC = () => {
  return(
    <Row className='m-0'>
      <CardGroup data={indic} />
      <SecondGroup 
        graphData={result30days()}
        radialData={timeUsluga}
      />
      <Col md={12} className="justify-content-center d-flex">
        <Button>Test Button</Button>
      </Col>
    </Row>
  )
}

export default HomePage;