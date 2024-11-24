// src/components/BoliviaMap.js

import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Solución para íconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Coordenadas de las ciudades más urbanas de Bolivia
const departments = [
  {
    name: "La Paz",
    position: [-16.4897, -68.1193], // Ciudad de La Paz
  },
  {
    name: "El Alto",
    position: [-16.5000, -68.1500], // Ciudad de El Alto
  },
  {
    name: "Cochabamba",
    position: [-17.3935, -66.1570], // Ciudad de Cochabamba
  },
  {
    name: "Santa Cruz de la Sierra",
    position: [-17.7833, -63.1833], // Ciudad de Santa Cruz
  },
  {
    name: "Oruro",
    position: [-17.9618, -67.1064], // Ciudad de Oruro
  },
  {
    name: "Potosí",
    position: [-19.5723, -65.7550], // Ciudad de Potosí
  },
  {
    name: "Sucre",
    position: [-19.0353, -65.2592], // Ciudad de Sucre
  },
  {
    name: "Tarija",
    position: [-21.5310, -64.7311], // Ciudad de Tarija
  },
  {
    name: "Trinidad",
    position: [-14.8347, -64.9020], // Ciudad de Trinidad
  },
  {
    name: "Cobija",
    position: [-11.0264, -68.7687], // Ciudad de Cobija
  },
];

// Componente para ajustar el mapa a los marcadores
const MapBounds = ({ markers }) => {
  const map = useMap();

  useEffect(() => {
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map((marker) => marker.position));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [markers, map]);

  return null;
};

const BoliviaMap = () => {
  return (
    <MapContainer
      center={[-16.2902, -63.5887]} // Centro de Bolivia
      zoom={5}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Ajustar mapa a los marcadores */}
      <MapBounds markers={departments} />
      {/* Marcadores para las ciudades más urbanas */}
      {departments.map((dept, index) => (
        <Marker key={index} position={dept.position}>
          <Popup>{dept.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default BoliviaMap;
