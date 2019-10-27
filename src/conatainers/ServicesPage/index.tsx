import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardBoard from '../../components/CardBoard';
import data from "../../data_for_dashboard/statistics.json";
import SecondGroup from './SecondGroup';

const ServicesPage: React.FC = () => {
  const topOrganization = data.top_organizations_uslugas.slice(0,4);
  const uslugas7Days = data.count_per_date_7_uslugas;
  const uslugas30Days = data.count_per_date_30_uslugas;
  // 
  const timeUs = data.distribution_time_uslugas[45];
  console.log(timeUs.data)
  
  return(
    <Row className='m-0 justify-content-center'>
      <h2 style={{textAlign: "center"}}>Информация по услугам "за месяц"</h2>
      <Col md={12}>
        <h3>Топ организаций</h3>
        <Row className="justify-content-center mt-3 mb-4">
          {topOrganization.map((item: any) => (
            <Col md={3} key={item.key}>
              <CardBoard 
                name={item.key}
                value={item.value}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <SecondGroup
        barData={uslugas7Days}
        graphData={uslugas30Days}
      />
    </Row>
  )
}

export default ServicesPage;