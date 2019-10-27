import React from 'react';
import s from './SimpleRadialBarChart.module.css';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer} from "recharts";

interface IProps {
  md?: boolean;
  value: string;
  data: any;
  title?: string;
}

const SimpleRadialBarChart:React.FC<IProps> = ({  md, data, value, title }:IProps) => {
  function styleSize(){
    if(md) return "wic-md";
    return "wic";
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00C49F',];

  const style = {
  	top: 0,
  	left: 350,
  	lineHeight: '24px'
  };
  return (
    <div className={styleSize()}>
      <h3>{title}</h3>
      <div className={s.wrapper}>
        <ResponsiveContainer>
          <RadialBarChart 
            width={500} 
            height={300} 
            cx={150} 
            cy={150} 
            innerRadius={20} 
            outerRadius={140} 
            barSize={20} 
            startAngle={180}
            endAngle={-360}
            data={data.reverse()}
          >
            <RadialBar 
              label={{ position: 'insideStart', fill: '#fff' }} 
              background  
              dataKey={value}
            >
              {/* {
                data.map(({entry, index}:{entry:any, index:any}) => <Cell key={`cell-${index}`} fill={COLORS[index]}/>)
              } */}
            </RadialBar>
            <Legend 
              iconSize={10} 
              width={120} 
              height={140} 
              layout='vertical' 
              verticalAlign='middle' 
              wrapperStyle={style}/>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleRadialBarChart;