import React from 'react';
import s from './LineGraph.module.css';
import {
  ResponsiveContainer, LineChart, Line, 
  XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend
} from "recharts";



interface IProps {
  md?: boolean;
  date: string;
  value: string;
  value2?: string;
  value3?: string;
  data: any;
  title?: string;
  name_bar?: string;
  name_bar2?: string;
  name_bar3?: string;
}

const LineGraph:React.FC<IProps> = (
  { 
    md, data, name_bar, name_bar2, 
    name_bar3, date, value, value2, 
    value3, title
  }: IProps) => {

  function styleSize(){
    if(md) return "wic-md";
    return "wic";
  }
  return (
    <div className={styleSize()}>
      <h3>{title}</h3>
      <div className={s.wrapper}>
        <ResponsiveContainer>
          <LineChart width={600} height={300} data={data}>
            <XAxis dataKey={date}/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line  dataKey={value} name={name_bar} stroke="#a4de6c" />
            {value2 && 
              <Line  dataKey={value2} name={name_bar2} stroke="#d88484" />
            }
            {value3 && 
              <Line  dataKey={value3} name={name_bar3} stroke="#8dd1e1" />
            }
            </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraph;