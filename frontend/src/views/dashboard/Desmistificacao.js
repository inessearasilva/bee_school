import React, { useEffect, useState } from "react";
import { ReactTinyLink } from "react-tiny-link";

export default function Hashtags() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch("http://localhost:5050/links/");
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const records = await response.json();
        setRecords(records);
      } catch (error) {
        console.error("Error fetching data:", error);
        window.alert(error.message);
      }
    }
    getRecords();
  }, []);

  const validateUrl = (url) => {
    try {
      new URL(url); // Validate the URL format
      return true;
    } catch (error) {
      console.error("Invalid URL:", url);
      return false;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        {records.slice(0, records.length / 2).map((record) => (
          <div key={record._id}>
            {validateUrl(record.url) ? (
              <ReactTinyLink
                cardSize="large"
                showGraphic={true}
                maxLine={2}
                noCache={true}
                minLine={1}
                url={record.url}
              />
            ) : (
              <p>Invalid URL: {record.url}</p>
            )}
            <br />
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        {records.slice(records.length / 2).map((record) => (
          <div key={record._id}>
            {validateUrl(record.url) ? (
              <ReactTinyLink
                cardSize="large"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                noCache={true}
                url={record.url}
              />
            ) : (
              <p>Invalid URL: {record.url}</p>
            )}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
