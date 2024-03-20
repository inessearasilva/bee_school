import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js";

const Record = (props) => (
  <div>
    <p>{props.record.engagement_metrics.total_tweets}</p>
    <p>Negative: {props.record.sentiment_count.Negative}</p>
    <p>Neutral: {props.record.sentiment_count.Neutral}</p>
    <p>Positive: {props.record.sentiment_count.Positive}</p>
  </div>
);

export default function Sentiment() {
  const [records, setRecords] = useState([]);
  const chartRef = useRef(null);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://bee-aware-08ab5a1c994e.herokuapp.com/api/statistics_general/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, []);

  useEffect(() => {
    // Create the chart once the records are fetched
    if (records.length > 0) {
      const totalTweets = records.map(
        (record) => record.engagement_metrics.total_tweets
      );
      const negativeCount = records.map(
        (record) =>
          (record.sentiment_count.Negative /
            record.engagement_metrics.total_tweets) *
          100
      );
      const neutralCount = records.map(
        (record) =>
          (record.sentiment_count.Neutral /
            record.engagement_metrics.total_tweets) *
          100
      );
      const positiveCount = records.map(
        (record) =>
          (record.sentiment_count.Positive /
            record.engagement_metrics.total_tweets) *
          100
      );

      const chartData = {
        labels: records.map((record) => record._id),
        datasets: [
          {
            label: "Negative",
            data: negativeCount,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Neutral",
            data: neutralCount,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
          },
          {
            label: "Positive",
            data: positiveCount,
            backgroundColor: "rgba(75, 192, 192, 0.5)",
          },
        ],
      };

      const chartOptions = {
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const dataset = context.dataset;
                const index = context.dataIndex;
                const value = dataset.data[index];
      
                const total = dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(2) + "%";
      
                return `${value} (${percentage})`;
              },
            },
          },
        },
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 1,
            borderRadius: 5,
            barPercentage: 0.8,
          },
        },
      };
      
      
      
      

      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "horizontalBar",
        data: chartData,
        options: chartOptions,
      });
    }
  }, [records]);

  // This method will map out the records
  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  // This following section will display the records and the chart
  return (
    <div>
      <h3>Total Tweets</h3>
      {recordList()}
      <div className="chart-container" style={{ width: "400px", height: "300px" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
