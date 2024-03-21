import React, { useEffect, useState } from "react";
import { ReactTinyLink } from "react-tiny-link";

export default function Hashtags() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch("https://bee-aware-0831ce44e802.herokuapp.com/links/");
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

  const redirectToTopicPage = (topic) => {
    // Modify the URL to the desired topic page
    const topicPageURL = `http:/#/topics/${topic}`;
    window.open(topicPageURL, "_blank");
  };

  const validateUrl = (url) => {
    try {
      new URL(url); // Validate the URL format
      return true;
    } catch (error) {
      console.error("Invalid URL:", url);
      return false;
    }
  };

  // Remove duplicate records based on both URL and title
  const uniqueRecords = records.filter(
    (record, index, self) =>
      index ===
      self.findIndex(
        (r) => r.url === record.url || r.title === record.title
      )
  );

  return (
    <div>
            <h2>Perspectives and Updates</h2>
      <br />
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        {uniqueRecords.slice(0, uniqueRecords.length / 2).map((record) => (
          <div key={record._id}>
            {validateUrl(record.url) ? (
              <ReactTinyLink
              cardSize="large"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              noCache={true}
              url={record.url}
              loadSecureUrl={true}
                
                
              />
            ) : (
              <p>Invalid URL: {record.url}</p>
            )}
          <table className="newstable" style={{fontSize:"16px"}}>
                  <tbody>
                    <tr>
                    <td>Related Topics:&nbsp; 
  {Array.isArray(record.topic) ? (
    record.topic.map((topic, index) => (
      <span key={index}>
        <a href="#" onClick={() => redirectToTopicPage(topic)}>{topic}</a>
        {index < record.topic.length - 1 ? ', ' : ''}
      </span>
    ))
  ) : (
    <a href="#" onClick={() => redirectToTopicPage(record.topic)}>{record.topic}</a>
  )}
</td>

                    </tr>
                  </tbody>
                </table>
            <br />
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        {uniqueRecords.slice(uniqueRecords.length / 2).map((record) => (
          <div key={record._id}>
            {validateUrl(record.url) ? (
              <ReactTinyLink
                cardSize="large"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                noCache={true}
                url={record.url}
                loadSecureUrl={true}
              />
            ) : (
              <p>Invalid URL: {record.url}</p>
            )}
            <table className="newstable" style={{fontSize:"16px"}}>
                  <tbody>
                    <tr>
                    <td>Related Topics:&nbsp; 
  {Array.isArray(record.topic) ? (
    record.topic.map((topic, index) => (
      <span key={index}>
        <a href="#" onClick={() => redirectToTopicPage(topic)}>{topic}</a>
        {index < record.topic.length - 1 ? ', ' : ''}
      </span>
    ))
  ) : (
    <a href="#" onClick={() => redirectToTopicPage(record.topic)}>{record.topic}</a>
  )}
</td>
</tr>
                  </tbody>
                </table>
            <br />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
