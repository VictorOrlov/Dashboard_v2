import React from 'react';
import s from './SimpleBarChart.module.css';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface IProps {
  date: string;
  value: string;
  data: any;
  title?: string;
  name_bar?: string;
}

const SimpleBarChart:React.FC<IProps> = ({date, data, value, title, name_bar}:IProps) => {
  return (
    <div className="wic-md">
      <h3>{title}</h3>
      <div className={s.wrapper}>
        <ResponsiveContainer>
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey={date}/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey={value} fill="#8884d8" name={name_bar} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleBarChart;