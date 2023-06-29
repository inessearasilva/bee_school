import React, { useEffect, useState } from "react";

const Record = ({ hashtags }) => (
  <div>
    <h4>Hashtags:</h4>
    {hashtags.map(([hashtag, value]) => (
      <div key={hashtag}>
        {hashtag}: {value}
      </div>
    ))}
  </div>
);


export default function Hashtags() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch("http://localhost:5050/statistics_general/");
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const records = await response.json();
        setRecords(records);
      } catch (error) {
        window.alert(error.message);
      }
    }

    getRecords();
  }, []);

  const getFirstTenRecords = () => records.slice(0, 10);
  const getFirstTenHashtagEntries = (record) => Object.entries(record.hashtags).slice(0, 10);

  return (
    <div>
      {getFirstTenRecords().map((record) => (
        <Record hashtags={getFirstTenHashtagEntries(record)} key={record._id} />
      ))}
    </div>
  );
}
