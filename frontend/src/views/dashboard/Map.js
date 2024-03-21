import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
    <MapContainer style={{ height: "660px", width: "830px" }} center={[0, 0]} zoomSnap={0} zoom={1.70} doubleClickZoom={false} attributionControl={false} maxBounds={[[90, -180], [-90, 180]]}>
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
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://bee-aware-0831ce44e802.herokuapp.com/statistics_general/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();
  }, []);

  return (
    <div>
      {records.map((record) => (
        <Record record={record} key={record._id} />
      ))}
    </div>
  );
}
