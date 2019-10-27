import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CardBoardWithFake from '../../../components/CardBoardWithFake';

interface IProps {
  data: any;
  title?: string;
}

const CardGroup:React.FC<IProps> = ({ data, title }) => (
  <Col md={12}>
      <h3>{title}</h3>
      <Row className="justify-content-center mt-3 mb-4">
        <Col md={4}>
          <CardBoardWithFake data={data.requests} />
        </Col>
        <Col md={4}>
          <CardBoardWithFake data={data.uslugas} />
        </Col>
        <Col md={4}>
          <CardBoardWithFake data={data.consultation} />
        </Col>
      </Row>
    </Col>
);

export default CardGroup;