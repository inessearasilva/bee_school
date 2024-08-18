import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

const Topics = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch("https://bee-aware-2b421aedee22.herokuapp.com/statistics_general/");
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

  const getFirstTenRecords = () => {
    const sortedRecords = records.sort((a, b) => b.value - a.value);
    return sortedRecords.slice(0, 10);
  };

  const getFirstTenTopicsEntries = (record) => {
    const sortedTopics = Object.entries(record.topics).sort((a, b) => b[1] - a[1]);
    return sortedTopics.slice(0, 10);
  };

  return (
    <tbody>
      {getFirstTenRecords().map((record) => (
        <React.Fragment key={record._id}>
          <tr>
            <td style={{ padding: '3px', paddingInlineStart: '20px' }}>
            </td>
          </tr>
          {getFirstTenTopicsEntries(record).map(([topic, value]) => (
            <tr key={topic}>
              <td style={{ padding: '5px', paddingInlineStart: '10px', width:'82.5%' }}>
                <NavLink to={`/topics/${topic}`} style={{color: 'black'}}>
                  {topic}
                </NavLink>
              </td>
              <td className="qtt-background" style={{ padding: '3px' }}>
                {value}
              </td>
            </tr>
          ))}
          <tr>
            <td className="viewall-background" style={{ padding: '3px' }}>
              <NavLink to="/all_topics" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <strong>View All</strong>
              </NavLink>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '3px', paddingInlineStart: '20px' }}>
            </td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  );
};

export default Topics;
