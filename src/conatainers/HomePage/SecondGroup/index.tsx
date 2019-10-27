import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LineGraph from '../../../components/LineGraph';
import SimpleRadialBarChart from '../../../components/SimpleRadialBarChart';

interface IProps {
  graphData: any;
  radialData: any;
}

const SecondGroup:React.FC<IProps> = ({ graphData, radialData }: IProps) => (
  <Col md={12}>
    <Row>
      <Col md={7}>
            <LineGraph 
              title={'Статистика выполнения за последние 30 дней'}
              data={graphData}
              date={'date'}
              value={'total'}
              name_bar={'услуги'}
              value2={'total2'}
              name_bar2={'заявки'}

            />
        </Col>
        <Col md={5} >
          <SimpleRadialBarChart 
            title={'Сроки обработки заявлений по услугам в процентах'}
            data={radialData}
            value={'uv'}
          />
        </Col>
    </Row>
  </Col>
);

export default SecondGroup;