import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SimpleBarChart from '../../../components/SimpleBarChart';
import LineGraph from '../../../components/LineGraph';
// import SimpleRadialBarChart from '../../../components/SimpleRadialBarChart';

interface IProps {
  barData: any;
  graphData: any;
}

const SecondGroup:React.FC<IProps> = ({ barData, graphData }: IProps) => (
  <Col md={11}>
        <h2>За последние 7 дней</h2>
        <Row>
          <Col md={4}>
            <SimpleBarChart 
              title={"Через интернет"}
              data={barData}
              date={'date'}
              value={'lk_user'}
              name_bar={'выполнено'}
            />
          </Col>
          <Col md={4}>
            <SimpleBarChart 
              title={"На месте"}
              data={barData}
              date={'date'}
              value={'lk_servant'}
              name_bar={'выполнено'}
            />
          </Col>
          <Col md={4}>
            <SimpleBarChart 
              title={"ПГМУ"}
              data={barData}
              date={'date'}
              value={'pgmu'}
              name_bar={'выполнено'}
            />
          </Col>
          <Col md={12} className='mt-2'>
            <LineGraph 
              title={'За месяц'}
              data={graphData}
              date={'date'}
              value={'lk_user'}
              name_bar={'Через интернет'}
              value2={'lk_servant'}
              name_bar2={'На месте'}
              value3={'pgmu'}
              name_bar3={'ПГМУ'}
            />
          </Col>
          {/* <Col md={5} className='mt-2'>
            <SimpleRadialBarChart 
              data={timeUs.data}
              value={'value'}
            />
          </Col> */}
        </Row>
      </Col>
);

export default SecondGroup;