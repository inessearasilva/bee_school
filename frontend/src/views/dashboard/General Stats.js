import React, { useEffect, useState } from "react";

const Record = (props) => (
  <div className="statsg" style={{ display: 'flex', flexDirection: 'column' }}>
<div class="metric-container">
  <div class="metric-data">
    {props.record.engagement_metrics.total_impressions}
  </div>
  <div class="metric-box1"><strong>Impressions</strong></div>
</div>

<div class="metric-container">
  <div class="metric-data">
    {props.record.engagement_metrics.total_tweets}
  </div>
  <div class="metric-box2"><strong>Tweets</strong></div>
</div>

<div class="metric-container">
  <div class="metric-data">
    {props.record.engagement_metrics.total_likes}
  </div>
  <div class="metric-box3"><strong>Likes</strong></div>
</div>

<div class="metric-container">
  <div class="metric-data">
    {props.record.engagement_metrics.total_retweets}
  </div>
  <div class="metric-box4"><strong>Retweets</strong></div>
</div>

<div class="metric-container">
  <div class="metric-data">
    {props.record.engagement_metrics.total_quotes}
  </div>
  <div class="metric-box5"><strong>Quotes</strong></div>
</div>

<div class="metric-container">
  <div class="metric-data">
    {props.record.engagement_metrics.total_replys}
  </div>
  <div class="metric-box6"><strong>Replys</strong></div>
</div>

</div>
);

export default function Sentiment() {
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

  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  return (
    <div>
    <div style={{ display: 'flex' }}>
      <div>
        {recordList()}
      </div> 
      </div>
    </div>
  );
}
