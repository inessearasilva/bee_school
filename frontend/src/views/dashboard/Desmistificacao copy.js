import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Record = (props) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const heatmapData = Object.entries(props.record.geographical).map(([country, value]) => ({
      country: country,
      value: value,
      coordinates: [Math.random() * 180 - 90, Math.random() * 360 - 180], // Replace with actual coordinates if available
    }));

    const updatedCountry = countriesData.features.map((feature) => {
      const data = heatmapData.find((item) => item.country === feature.properties.name);
      if (data) {
        return {
          ...feature,
          properties: {
            ...feature.properties,
            value: data.value,
          },
        };
      } else {
        return feature;
      }
    });

    setCountryData(updatedCountry);
  }, [props.record]);

  return (
    <MapContainer style={{ height: "400px" }} center={[0, 0]} zoom={2}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countryData && (
        <GeoJSON
          key={countryData.properties.name}
          data={countryData}
          style={(feature) => ({
            fillColor: getColor(feature.properties.value),
            weight: 2,
            opacity: 1,
            color: "white",
            dashArray: "3",
            fillOpacity: 0.7,
          })}
        />
      )}
    </MapContainer>
  );
};

const getColor = (value) => {
  // Replace this with your own logic to determine the color based on the value
  return value > 1000 ? "#FF0000" : "#00FF00";
};

export default function Sentiment() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch("https://bee-aware-08ab5a1c994e.herokuapp.com/statistics_general/");

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
      <h3>Total Tweets</h3>
      {records.map((record) => (
        <Record record={record} key={record._id} />
      ))}
    </div>
  );
}
