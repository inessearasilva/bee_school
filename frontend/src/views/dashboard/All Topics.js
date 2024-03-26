import React, { useEffect, useState } from "react";
import { FaAngleRight } from 'react-icons/fa';


const Record = (props) => {
  const topicsArray = Object.keys(props.record.topics);
  const halfLength = Math.ceil(topicsArray.length / 2);
  const firstHalf = topicsArray.slice(0, halfLength);
  const secondHalf = topicsArray.slice(halfLength);

  const redirectToTopicPage = (topic) => {
    // Modify the URL to the desired topic page
    const topicPageURL = `http:/#/topics/${topic}`;
    window.open(topicPageURL, "_blank");
  };

  return (

    <table className="home-table1" style={{ width:'100%', textAlign:"center"}}>
    <div className="row align-items-start" style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <table>
          <tbody>
          {props.filteredTopics.slice(0, Math.ceil(props.filteredTopics.length / 3)).map((topic, index) => (
            <table key={topic} className="home-table2" style={{ marginTop:'20px', marginBottom:'20px', alignItems: 'center', width: '100%'}}>
              <thead>
                <tr>
                  <th style={{ display: 'flex', padding:'12px' }}>
                    <span style={{ marginLeft:'8px' ,marginRight: 'auto' }}>{topic}</span>
                    <a style={{ marginRight: '8px' }} href="#" onClick={() => redirectToTopicPage(topic)}>
                      <FaAngleRight />
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td style={{ display: 'flex', padding:'12px' }}>
                  <span style={{ marginLeft:'8px' , marginRight: 'auto' }}>Total Tweets</span>
                  <span style={{ marginRight: '8px' }}>{props.record.topics[topic]}</span>
                </td>
              </tr>
              </tbody>
            </table>
          ))}
          </tbody>
        </table>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <table>
          <tbody>

            {props.filteredTopics.slice(Math.ceil(props.filteredTopics.length / 3), Math.ceil(props.filteredTopics.length / 3 * 2)).map((topic, index) => (
            <table key={topic} className="home-table2" style={{ marginTop:'20px', marginBottom:'20px', alignItems: 'center', width: '100%'}}>
              <thead>
                <tr>
                  <th style={{ display: 'flex', padding:'12px' }}>
                    <span style={{ marginLeft:'8px' ,marginRight: 'auto' }}>{topic}</span>
                    <a style={{ marginRight: '8px' }} href="#" onClick={() => redirectToTopicPage(topic)}>
                      <FaAngleRight />
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td style={{ display: 'flex', padding:'12px' }}>
                  <span style={{ marginLeft:'8px' , marginRight: 'auto' }}>Total Tweets</span>
                  <span style={{ marginRight: '8px' }}>{props.record.topics[topic]}</span>
                </td>
              </tr>
              </tbody>
            </table>
          ))}
          </tbody>
        </table>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <table>
          <tbody>
          {props.filteredTopics.slice(Math.ceil(props.filteredTopics.length / 3 * 2)).map((topic, index) => (
            <table key={topic} className="home-table2" style={{ marginTop:'20px', marginBottom:'20px', alignItems: 'center', width: '100%'}}>
            <thead>
                <tr>
                  <th style={{ display: 'flex', padding:'12px' }}>
                    <span style={{ marginLeft:'8px' ,marginRight: 'auto' }}>{topic}</span>
                    <a style={{ marginRight: '8px' }} href="#" onClick={() => redirectToTopicPage(topic)}>
                      <FaAngleRight />
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td style={{ display: 'flex', padding:'12px' }}>
                  <span style={{ marginLeft:'8px' , marginRight: 'auto' }}>Total Tweets</span>
                  <span style={{ marginRight: '8px'}}>{props.record.topics[topic]}</span>
                </td>
              </tr>
              </tbody>
          </table>
  ))}
          </tbody>
        </table>
      </div>
    </div>
    </table>
  );
};

export default function Sentiment() {
  const [records, setRecords] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [availableLetters, setAvailableLetters] = useState(new Set()); // Define availableLetters state

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);

    let newAvailableLetters = new Set();
    records.forEach((record) => {
      const topicsArray = Object.keys(record.topics);
      topicsArray.forEach((topic) => {
        newAvailableLetters.add(topic[0].toUpperCase());
      });
    });
    setAvailableLetters(newAvailableLetters);
  };

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

  useEffect(() => {
    let newAvailableLetters = new Set();
    records.forEach((record) => {
      const topicsArray = Object.keys(record.topics);
      topicsArray.forEach((topic) => {
        if (topic.toLowerCase().startsWith(selectedLetter.toLowerCase())) {
          newAvailableLetters.add(topic[0].toUpperCase());
        }
      });
    });
    setAvailableLetters(newAvailableLetters);
  }, [selectedLetter, records]);

  function recordList() {
    return records.map((record) => {
      const topicsArray = Object.keys(record.topics);
      const filteredTopics = selectedLetter
        ? topicsArray.filter((topic) =>
            topic.toLowerCase().startsWith(selectedLetter.toLowerCase())
          )
        : topicsArray;

      return (
        <Record
          record={record}
          key={record._id}
          filteredTopics={filteredTopics}
        />
      );
    });
  }

  return (
    <div>
      <div>
        <button
          className={selectedLetter === '' ? 'active' : ''}
          onClick={() => handleLetterClick('')}
          style={{padding:'8px 19px'}}>
          All
        </button>
        {Array.from({ length: 26 }, (_, index) => (
          <button
            key={index}
            className={selectedLetter === String.fromCharCode(65 + index) ? 'active' : ''}
            onClick={() => handleLetterClick(String.fromCharCode(65 + index))}
            style={{padding:'8px 17.6px'}}>
            {String.fromCharCode(65 + index)}
          </button>
        ))}
      </div>
      <br />
      <div>
        {recordList()}
      </div>
    </div>
  );
}