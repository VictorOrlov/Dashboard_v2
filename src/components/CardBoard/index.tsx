import React from 'react';
import s from './CardBoard.module.css';
import { Card } from 'react-bootstrap';
import decrease from '../../images/decrease.svg'
import increase from '../../images/increase.svg'

interface IProps {
  incr?: boolean;
  dicr?: boolean;
  name?: string;
  value?: number;
}

const CardBoard:React.FC<IProps> = ({ incr, dicr, name, value }) => {

  function iconFn(){
    if(dicr) return <img src={decrease} alt="+"/>;
    if(incr) return <img src={increase} alt="+"/>;
    return null;
  }

  return (
    <Card>
      <Card.Header className={s.headerCardBoard}>{name || 'Без имени'}</Card.Header>
      <Card.Body className={s.wrappCardBody}>
        <div className={s.icon_img}>
          {iconFn()}
        </div>
        <span>Выполнено {value || "000"} заявок</span>
      </Card.Body>
      {/* <Card.Footer>
        <small className="text-muted">28 запросов за последние 24ч.</small>
      </Card.Footer> */}
    </Card>   
  );
};

export default CardBoard;