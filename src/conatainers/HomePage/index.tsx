import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import {
  ResponsiveContainer, ComposedChart, Line, 
  Area, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend
} from "recharts";

const state = {
  lat: 55.798521,
  lng: 49.124785,
  zoom: 13
};
const data = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
              {name: 'Page B', uv: 868, pv: 967, amt: 1506},
              {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
              {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
              {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
              {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];

const HomePage: React.FC = () => {
  return(
    <Row>
      <Col md={12} style={{height: "500px"}}>
        <ResponsiveContainer>
          <ComposedChart width={600} height={400} data={data}
                margin={{top: 20, right: 20, bottom: 20, left: 20}}>
              <CartesianGrid stroke='#f5f5f5'/>
              <XAxis dataKey="name"/>
              <YAxis />
              <Tooltip/>
              <Legend/>
              <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
              <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
              <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
          </ComposedChart>
        </ResponsiveContainer>
      </Col>
      <Col md={12} className="justify-content-center d-flex">
        <Button>Test Button</Button>
      </Col>
      <Col md={12} style={{height: "500px"}}>
      <LeafletMap
        center={[state.lat, state.lng]}
        zoom={state.zoom}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          minZoom={9}
          maxZoom={18}
        />
        <Marker position={[state.lat, state.lng]}>
          <Popup>Без комментариев.</Popup>
        </Marker>
      </LeafletMap>
      </Col>
    </Row>
  )
}

export default HomePage;