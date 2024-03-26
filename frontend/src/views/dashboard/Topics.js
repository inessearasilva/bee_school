import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react';

const Topics = () => {
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

  const getFirstTenRecords = () => {
    // Sort the records based on their values in descending order
    const sortedRecords = records.sort((a, b) => b.value - a.value);
    // Slice the first 10 records
    return sortedRecords.slice(0, 10);
  };

  const getFirstTenTopicsEntries = (record) => {
    // Sort the topics based on their values in descending order
    const sortedTopics = Object.entries(record.topics).sort((a, b) => b[1] - a[1]);
    // Slice the first 10 topics
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
