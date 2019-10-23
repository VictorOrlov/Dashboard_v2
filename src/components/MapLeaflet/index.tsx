import React from 'react';
import s from './MapLeaflet.module.css';
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

const state = {
  lat: 55.798521,
  lng: 49.124785,
  zoom: 13
};

const MapLeaflet: React.FC = () => {
  return(
    <div className={`wrapperInCol ${s.wrapper}`}>
      <h3>i map</h3>
      <LeafletMap
        center={[state.lat, state.lng]}
        zoom={state.zoom}
        scrollWheelZoom={false}
        style={{ height: "90%", width: "100%" }}
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
      </div>
  );
};

export default MapLeaflet;