import React, { useEffect, useState } from "react";

const Hashtags = () => {
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
  const getFirstTenHashtagEntries = (record) =>
    Object.entries(record.hashtags).slice(0, 10);

  return (
    <tbody>
      {getFirstTenRecords().map((record) => (
        <React.Fragment key={record._id}>
          <tr>
            <td style={{ padding: '3px', paddingInlineStart: '20px' }}>
            </td>
          </tr>
          {getFirstTenHashtagEntries(record).map(([hashtag, value]) => (
            <tr key={hashtag}>
              <td style={{ padding: '5px', paddingInlineStart: '10px', width:'82.5%' }}>
                {hashtag}
              </td>
              <td className="qtt-background" style={{ padding: '3px' }}>
                {value}
              </td>
            </tr>
          ))}
          <tr>
            <td style={{ padding: '3px', paddingInlineStart: '20px' }}>
            </td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  );
};

export default Hashtags;
