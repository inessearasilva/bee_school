import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useParams } from 'react-router-dom';

const Record = (props) => {
  const heatmapData = Object.entries(props.record.geographical).reduce((data, [country, values]) => {
    if (country !== "null") {
      const value = values[0]; // Value is stored at index 0
      const latitude = values[1]; // Latitude at index 1
      const longitude = values[2]; // Longitude at index 2
      
      if (latitude !== null && longitude !== null) {
        data.push({
          country: country,
          value: value,
          coordinates: [latitude, longitude],
        });
      }
    }
    return data;
  }, []);
  return (
    <MapContainer style={{ height: "500px", width: "600px" }} center={[0, 0]} zoomSnap={0} zoom={1.25} doubleClickZoom={false} attributionControl={false} maxBounds={[[90, -180], [-90, 180]]}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" noWrap={true}/>
      {heatmapData.map((data) => (
        <CircleMarker
          key={data.country}
          center={data.coordinates}
          radius= {(data.value) ** (1/5) * 5}
          color="#F9E076"
          fillColor="#F9E076"
          fillOpacity={0.8}
        >
          <Popup>
            <div>
              <strong>Country: </strong>{data.country}
            </div>
            <div>
              <strong>Value: </strong>{data.value}
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default function Map() {
  const { topic } = useParams();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch("http://localhost:5050/statistics/");
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const records = await response.json();
        const matchingRecords = records.filter((r) => r.topic === topic);
        setRecords(matchingRecords);
      } catch (error) {
        window.alert(error.message);
      }
    }

    getRecords();
  }, [topic]);

  if (!records.length) {
    return <div>No record found</div>;
  }

  return (
    <div>
      {records.map((record) => (
        <Record record={record} key={record.topic} />
      ))}
    </div>
  );
}

