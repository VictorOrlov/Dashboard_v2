import React from 'react';
import s from './CardBoardWithFake.module.css';
import { Card } from 'react-bootstrap';
import decrease from '../../images/decrease.svg'
import increase from '../../images/increase.svg'

interface IProps {
  data: any
}

const CardBoardWithFake:React.FC<IProps> = ({ data}) => {

  function iconFn(){
    const oneProc = data.data[data.data.length-1].uv  / 100;

    if(data.data[data.data.length-1].uv > data.data[data.data.length-2].uv) {
      const difference = data.data[data.data.length-1].uv - data.data[data.data.length-2].uv;
      const result = (difference / oneProc).toFixed(1);
      return (
        <div className={s.differance}>
          <div className={s.icon_img}>
            <img src={increase} alt="+"/>
          </div>
          <span> На {result}% больше</span>
        </div>
      );
    } else if(data.data[data.data.length-1].uv < data.data[data.data.length-2].uv) {
      const difference = data.data[data.data.length-2].uv - data.data[data.data.length-1].uv;
      const result = (difference / oneProc).toFixed(1);
      return (
        <div className={s.differance}>
          <div className={s.icon_img}>
            <img src={decrease} alt="+"/>
          </div>
          <span>На -{result}% меньше</span>
        </div>
      );
    }
  }
  // console.log(data.data[data.data.length-1].uv)
  return (
    <Card>
      <Card.Header className={s.headerCardBoard}>
        <span>
          {data.name}
        </span>
        {iconFn()}
      </Card.Header>
      <Card.Body className={s.wrappCardBody}>
        <span>
          {data.data[data.data.length-1].uv}
        </span>
      </Card.Body>
    </Card>   
  );
};

export default CardBoardWithFake;