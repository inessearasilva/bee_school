import React, { useEffect, useState } from "react";
export default function Hashtags() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch("https://bee-aware-2b421aedee22.herokuapp.com/links/");
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
  const redirectToFullUrl = (url) => {
    window.location.href = url;
  }

  const renderShortenedUrl = (url) => {
    let shortenedUrl = url;
    
    if (url.includes('.com')) {
      shortenedUrl = url.split('.com')[0] + '.com';
    } else if (url.includes('.org')) {
      shortenedUrl = url.split('.org')[0] + '.org';
    } else if (url.includes('.uk')) {
      shortenedUrl = url.split('.uk')[0] + '.uk';
    } else if (url.includes('.gov')) {
      shortenedUrl = url.split('.gov')[0] + '.gov';
    } else if (url.includes('.ca')) {
      shortenedUrl = url.split('.ca')[0] + '.ca';
    } else if (url.includes('.tv')) {
      shortenedUrl = url.split('.tv')[0] + '.tv';
    } else if (url.includes('.net')) {
      shortenedUrl = url.split('.net')[0] + '.net';
    } else if (url.includes('.edu')) {
      shortenedUrl = url.split('.edu')[0] + '.edu';
    } else if (url.includes('.online')) {
      shortenedUrl = url.split('.online')[0] + '.online';
    } else if (url.includes('.fi')) {
      shortenedUrl = url.split('.fi')[0] + '.fi';
    } else if (url.includes('.mp')) {
      shortenedUrl = url.split('.mp')[0] + '.mp';
    } else if (url.includes('.ie')) {
      shortenedUrl = url.split('.ie')[0] + '.ie';
    } else if (url.includes('.zw')) {
      shortenedUrl = url.split('.zw')[0] + '.zw';
    }  
  
    return shortenedUrl;
  }
  

  const validateUrl = (url) => {
    try {
      new URL(url); // Validate the URL format
      return true;
    } catch (error) {
      console.error("Invalid URL:", url);
      return false;
    }
  };


  const limitDescription = (description) => {
    const limit = 190;
    
    if (description && description.length > limit) {
      // Find the last space before the character limit
      let lastSpaceIndex = description.lastIndexOf(' ', limit);
      
      // If there are no spaces before the limit, just truncate the string
      if (lastSpaceIndex === -1) {
        return description.substring(0, limit) + '...';
      }
      
      // Otherwise, truncate at the last space
      return description.substring(0, lastSpaceIndex) + '...';
    }
    
    return description;
  };

  const limitTitle = (title) => {
    const limit = 145;
    
    if (title && title.length > limit) {
      // Find the last space before the character limit
      let lastSpaceIndex = title.lastIndexOf(' ', limit);
      
      // If there are no spaces before the limit, just truncate the string
      if (lastSpaceIndex === -1) {
        return title.substring(0, limit) + '...';
      }
      
      // Otherwise, truncate at the last space
      return title.substring(0, lastSpaceIndex) + '...';
    }
    
    return title;
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
      <div className="perspectivesg" style={{ flex: 1 }}>
        {uniqueRecords.slice(0, uniqueRecords.length / 2).map((record) => (
          <div key={record._id}>
            {validateUrl(record.url) ? (
                        <table className="newstable" >
                        <tbody>
                  <tr>
                      <td style={{fontSize:"16px", fontWeight: "bold", marginLeft:'10px', marginTop:'5px', display: 'block'}}>{limitTitle(record.title)}</td>
                  </tr>
                  <tr>
                      <td style={{fontSize:"14px", marginLeft:'10px', display: 'block'}}>{limitDescription(record.description)}</td>
                  </tr>
                  <tr>
                                <td style={{ fontSize: "12px", marginLeft: '10px', marginBottom: '5px', display: 'block' }}>
                                  <a href="#" onClick={() => redirectToFullUrl(record.url)}>{renderShortenedUrl(record.url)}</a>
                                </td>
                              </tr>
                  <tfoot>
                      <td style={{fontSize:"16px", marginLeft:'10px', display: 'block'}}>Related Topics:&nbsp;
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
              
                                  </tfoot>
                                </tbody>
                              </table>
            ) : (
              <p>Invalid URL: {record.url}</p>
            )}
            <br />
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }} className="perspectivesg">
        {uniqueRecords.slice(uniqueRecords.length / 2).map((record) => (
          <div key={record._id}>
          {validateUrl(record.url) ? (
                      <table className="newstable" >
                      <tbody>
                <tr>
                    <td style={{fontSize:"16px", fontWeight: "bold", marginLeft:'10px', marginTop:'5px', display: 'block'}}>{limitTitle(record.title)}</td>
                </tr>
                <tr>
                    <td style={{fontSize:"14px", marginLeft:'10px', display: 'block'}}>{limitDescription(record.description)}</td>
                </tr>
                <tr>
                              <td style={{ fontSize: "12px", marginLeft: '10px', marginBottom: '5px', display: 'block' }}>
                                <a href="#" onClick={() => redirectToFullUrl(record.url)}>{renderShortenedUrl(record.url)}</a>
                              </td>
                            </tr>
                <tfoot>
                    <td style={{fontSize:"16px", marginLeft:'10px', display: 'block'}}>Related Topics:&nbsp;
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
            
                                </tfoot>
                              </tbody>
                            </table>
          ) : (
            <p>Invalid URL: {record.url}</p>
          )}
          <br />
        </div>
        ))}
      </div>
      <div style={{ flex: 1, maxWidth:"280px" }} className="perspectivesp">
        {uniqueRecords.map((record) => (
          <div key={record._id}>
          {validateUrl(record.url) ? (
                      <table className="newstable" >
                      <tbody>
                <tr>
                    <td style={{fontSize:"16px", fontWeight: "bold", marginLeft:'10px', marginTop:'5px', display: 'block'}}>{limitTitle(record.title)}</td>
                </tr>
                <tr>
                    <td style={{fontSize:"14px", marginLeft:'10px', display: 'block'}}>{limitDescription(record.description)}</td>
                </tr>
                <tr>
                              <td style={{ fontSize: "12px", marginLeft: '10px', marginBottom: '5px', display: 'block' }}>
                                <a href="#" onClick={() => redirectToFullUrl(record.url)}>{renderShortenedUrl(record.url)}</a>
                              </td>
                            </tr>
                <tfoot>
                    <td style={{fontSize:"16px", marginLeft:'10px', display: 'block'}}>Related Topics:&nbsp;
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
            
                                </tfoot>
                              </tbody>
                            </table>
          ) : (
            <p>Invalid URL: {record.url}</p>
          )}
          <br />
        </div>
        ))}
      </div>
    </div>
    </div>
  );
}
