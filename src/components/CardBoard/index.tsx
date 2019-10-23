import React from 'react';
import s from './CardBoard.module.css';
import { Col, Card } from 'react-bootstrap';
import decrease from '../../images/decrease.svg'
import increase from '../../images/increase.svg'

interface IProps {
  incr?: boolean;
  dicr?: boolean;
}

const CardBoard:React.FC<IProps> = ({ incr, dicr }) => {

  function iconFn(){
    if(dicr) return decrease;
    if(incr) return increase;
    return "https://icon-library.net/images/funny-icon-png/funny-icon-png-19.jpg"
  }

  return (
    <Card>
      <Card.Header>Запросы на вырубку лесов</Card.Header>
      <Card.Body className={s.wrappCardBody}>
        <div className={s.icon_img}>
          <img src={iconFn()} alt="+"/>
        </div>
        <span>778 запрос(ов)</span>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">28 запросов за последние 24ч.</small>
      </Card.Footer>
    </Card>   
  );
};

export default CardBoard;