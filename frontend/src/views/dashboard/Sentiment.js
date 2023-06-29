import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

const Record = (props) => (
  <div>
    <p>{props.record.engagement_metrics.total_tweets}</p>
    <p>Negative: {props.record.sentiment_count.Negative}</p>
    <p>Neutral: {props.record.sentiment_count.Neutral}</p>
    <p>Positive: {props.record.sentiment_count.Positive}</p>
  </div>
);

const colors = [
  "#FFB3B3",
  "#B3CCFF",
  "#99E699",
];

export default function Sentiment() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/statistics_general/`);

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

  function calculatePercentage(record, category) {
    const totalTweets = record.engagement_metrics.total_tweets;
    const sentimentCount = record.sentiment_count[category];
    return (sentimentCount / totalTweets) * 100;
  }

  function calculateLength(record, category) {
    const maxLength = 100; // Maximum length of the bar in pixels
    const percentage = calculatePercentage(record, category);
    return (maxLength * percentage) / 100;
  }

  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  return (
    <div>
      <h3>Total Tweets</h3>
      {recordList()}
      {records.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={records} layout="vertical">
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="_id" hide />
            <Bar dataKey={() => 0} barSize={32}>
              {records.map((record, idx) => (
                <Cell
                  key={record._id}
                  fill={colors[0]}
                  width={calculateLength(record, "Negative")}
                />
              ))}
            </Bar>
            <Bar dataKey={() => 0} barSize={32}>
              {records.map((record, idx) => (
                <Cell
                  key={record._id}
                  fill={colors[1]}
                  width={calculateLength(record, "Neutral")}
                />
              ))}
            </Bar>
            <Bar dataKey={() => 0} barSize={32}>
              {records.map((record, idx) => (
                <Cell
                  key={record._id}
                  fill={colors[2]}
                  width={calculateLength(record, "Positive")}
                />
              ))}
            </Bar>
            <Legend
              layout="vertical"
              verticalAlign="top"
              align="left"
              wrapperStyle={{ top: 0, left: 0 }}
            />
            <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
