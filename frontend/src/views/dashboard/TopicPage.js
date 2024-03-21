import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import verifiedImage from '../../assets/images/verified.png';
import { FaHeart, FaRetweet, FaQuoteLeft, FaReply, FaEye, FaUser, FaRegSmileBeam, FaRegFrown, FaRegMeh } from 'react-icons/fa';
import Map from './Map Topic'
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, LabelList, Label, PieChart, Pie, Cell, Tooltip } from "recharts";
import ReactWordcloud from "react-wordcloud"; 
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css'

const Record = ({ record, hashtags, filteredTop10, selectedFilter, handleFilterChange, options, keywordsArray, hashtagsArray }) => {
  // Prepare data for the pie chart
  const pieData = record ? [
    { name: 'Positive', value: record.sentiment_count?.Positive || 0, color: '#76CC9D', perc: record.sentiment_percentages?.Positive },
    { name: 'Neutral', value: record.sentiment_count?.Neutral || 0, color: '#FADB7C', perc: record.sentiment_percentages?.Neutral },
    { name: 'Negative', value: record.sentiment_count?.Negative || 0, color: '#F46161', perc: record.sentiment_percentages?.Negative },
  ] : [];

  const PieGraphic = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (data, index) => {
      setActiveIndex(index);
    };

    const renderTooltipContent = (props) => {
      const { payload } = props;
      if (payload && payload.length > 0) {
        const entry = payload[0];
        const { name, perc } = entry.payload;

        return (
          <div style= {{marginRight:'10px', marginLeft:'10px', marginTop:'10px'}}>
            <p><strong>{name}</strong>: {`${perc.toFixed(2)}%`}</p>
          </div>
        );
      }
    };

    return (
      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
          dataKey="value"
          cx={120}
          cy={150}
          innerRadius={75}
          outerRadius={110}
          paddingAngle={5}
          onMouseEnter={handleMouseEnter}
        >
          {pieData.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={renderTooltipContent} active={activeIndex !== null} wrapperStyle={{ backgroundColor: "white", border: '1px solid #ccc' }} />
      </PieChart>
    );
  };

  const calculateKValue = (value) => {
    const kValue = value / 1000;
    // Use toFixed(1) to display one decimal if the value is less than 1
    return kValue.toFixed(kValue < 1 ? 1 : 0);
  };

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (record && record.engagement_metrics) {
      const data = [
        { name: 'Impressions', value: record.engagement_metrics.total_impressions, sqrtValue: Math.sqrt(record.engagement_metrics.total_impressions) * 0.9, kValue: calculateKValue(record.engagement_metrics.total_impressions), },
        { name: 'Likes', value: record.engagement_metrics.total_likes, sqrtValue: Math.sqrt(record.engagement_metrics.total_likes), kValue: calculateKValue(record.engagement_metrics.total_likes),},
        { name: 'Retweets', value: record.engagement_metrics.total_retweets, sqrtValue: Math.sqrt(record.engagement_metrics.total_retweets), kValue: calculateKValue(record.engagement_metrics.total_retweets), },
        { name: 'Quotes', value: record.engagement_metrics.total_quotes, sqrtValue: Math.sqrt(record.engagement_metrics.total_quotes), kValue: calculateKValue(record.engagement_metrics.total_quotes)},
        { name: 'Replys', value: record.engagement_metrics.total_replys, sqrtValue: Math.sqrt(record.engagement_metrics.total_replys), kValue: calculateKValue(record.engagement_metrics.total_replys) },
      ];
      setChartData(data);
    }
  }, [record]);
  

  const CustomTooltip = ({ active, payload, label, coordinate }) => {
    if (active && payload && payload.length) {
      const value = payload[0].payload.value;
      return (
        <div className="custom-tooltip" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ marginTop: '10px', marginRight: '10px', marginLeft: '10px' }}>
          <p className="intro" style={{ textAlign: 'center' }}>Value: {value}</p></div>
        </div>
      );
    }
  
    return null;
  };

  const CustomBarLabel = ({ x, y, value }) => (
    <text x={x + 0} y={y - 7} textAnchor="start" fontWeight="bold">
      {value}
    </text>
  );
  
  return (
    <div >
      <table className="home-table1" style={{ display: 'flex', alignItems: 'center', width:'100%', minWidth: '1280px', maxWidth:'1280px' }}>
      <thead>
        <tr>
          <th colSpan="2" style={{ textAlign: 'center', position: 'relative' }}>
            <span style={{ position: 'relative', top: '3.6px' }}>{record?.topic}</span>
          </th>
        </tr>
      </thead>
      <div>
        <div style={{ display: 'flex', marginTop: '40px'}}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '130px' }}>
          <h3><strong>{record?.engagement_metrics?.total_tweets}</strong></h3>
          <h6>Total</h6>
          <p></p>
          <h3 style={{ color: '#76CC9D' }}><strong>{record?.sentiment_count?.Positive}</strong></h3>
          <h6>Positive</h6>
          <p></p>
          <h3 style={{ color: '#FADB7C' }}><strong>{record?.sentiment_count?.Neutral}</strong></h3>
          <h6>Neutral</h6>
          <p></p>
          <h3 style={{ color: '#F46161' }}><strong>{record?.sentiment_count?.Negative}</strong></h3>
          <h6>Negative</h6>
        </div>
        <div style={{ width: '350px', height: '350px', marginLeft: '150px' }}>
          <PieGraphic />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ResponsiveContainer width={450} height={350}>
            <BarChart layout="vertical" data={chartData} barSize={35} margin={{ left: 60, right: 80, top:4, bottom: 20 }}> {/* Adjust the margins */}
                <XAxis type="number" dataKey="sqrtValue" hide /> {/* Use "sqrtValue" for XAxis dataKey */}
                <YAxis type="category" dataKey="name" hide/> {/* Use "name" for YAxis dataKey */}
                <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: "white", border: '1px solid #ccc' }} />
                <Bar dataKey="sqrtValue" fill="#8884d8">
                  <LabelList
                    dataKey="name"
                    position="top"
                    //offset={4}
                    content={<CustomBarLabel />}
                  />
                  <LabelList
                    dataKey="kValue"
                    position="right"
                    formatter={(value) => `${value}K`}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
        </div>
      </div>
      </table>
      <br></br>
      
      <div className="container text" >
              <div className="row align-items-start" style={{ display: 'flex', width:'100%', minWidth: '1280px', maxWidth:'1280px'}}>
              <div className="col-lg-6 col-md-4 col-sm-8" style={{marginRight:'15px'}}>
              <div className="flex-container">
                  <div className="flex-item">
                    <div style={{ marginBottom: '20px'}}>
                  <h3>Trending Tweets Today </h3></div>
                  <div className="filter-buttons">
        <button
          className={selectedFilter === "top_10_global" ? "active" : ""}
          onClick={() => handleFilterChange("top_10_global")}
        >
          Global
        </button>
        <button
          className={selectedFilter === "top_10_media" ? "active" : ""}
          onClick={() => handleFilterChange("top_10_media")}
        >
          With Media
        </button>
        <button
          className={selectedFilter === "top_10_verified" ? "active" : ""}
          onClick={() => handleFilterChange("top_10_verified")}
        >
          Verified
        </button>
        <button
                    className={selectedFilter === "top_10_question" ? "active" : ""}
                    onClick={() => handleFilterChange("top_10_question")}
                  >
                   Concerns
                  </button>
      </div>
      <br></br>
  {filteredTop10.length > 0 ? (
    filteredTop10.map((entry, index) => (
          <div key={index} style={{ marginBottom: '20px', width: '620px', border: '1px solid #ccc', borderRadius: '8px'}}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ marginRight: '10px', marginTop: '6px' }}>
              <img src={entry.profile_photo} alt="Profile" style={{ width: '65px', marginLeft: '5px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>
                <strong>@{entry.username}</strong> {entry.verified && <img src={verifiedImage} alt="Verified" style={{ width: '13px', height: '13px', verticalAlign: 'middle', marginBottom: '2px' }} />}
              </div>
              <div style={{ fontSize: '15px', marginRight: '5px' }}>
                {entry.result}
                <br />
                {entry.media !== null ? (
                <a href={entry.media} target="_blank" rel="noopener noreferrer">
                  {entry.media}
                </a>
              ) : null}
              </div>
            </div>
          </div>
          <br></br>
          <div style={{ marginLeft: '75px', marginBottom: '5px'}}>
            <FaEye title="Impressions" /> {entry.total_impressions} &nbsp;&nbsp;&nbsp;
            <FaHeart title="Likes" /> {entry.total_likes} &nbsp;&nbsp;&nbsp;
            <FaRetweet title="Retweets" /> {entry.total_retweets} &nbsp;&nbsp;&nbsp;
            <FaQuoteLeft title="Quotes" /> {entry.total_quotes} &nbsp;&nbsp;&nbsp;
            <FaReply title="Replies" /> {entry.total_replys} &nbsp;&nbsp;&nbsp;
            {entry.mentions > 1 ? <><FaUser title="Mentions" /> {entry.mentions}</> : null}

            <div style={{ marginLeft: '10px', display: 'inline-flex', alignItems: 'center'}}>
              {entry.sentiment === "Positive" ? <p><FaRegSmileBeam style={{ color: "#76CC9D" }} /> Positive</p> : null}
              {entry.sentiment === "Negative" ? <p><FaRegFrown style={{ color: "#F46161" }} /> Negative</p>: null}
              {entry.sentiment === "Neutral" ? <p><FaRegMeh style={{ color: "#FADB7C" }} /> Neutral</p>: null}
            </div>
          </div>
        </div>
 ))
 ) : (
   <p>No data available for the selected filter.</p>
 )}
       </div>
       </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4"  style={{ marginLeft:'5px', marginTop: '20px', alignItems:'center'}}>
              <br></br><br></br>
              <div style={{ width: "600px", height: "270px" , marginBottom:'40px'}}>
      <ReactWordcloud options={options} words={hashtagsArray} />
      </div>
        <Map/>
        
        <div style={{ width: "600px", height: "270px", marginTop:'40px' }}>
      <ReactWordcloud options={options} words={keywordsArray} />
      </div>
      </div>


    </div>
</div>
    </div>
  );
};


export default function Hashtags() {
  const { topic } = useParams();

  // State to store the selected filter, defaulting to 'top_10_global'
  const [selectedFilter, setSelectedFilter] = useState("top_10_global");

  // Declare keywordsArray outside the useEffect hook
  const [record, setRecord] = useState(null);
  const [keywordsArray, setKeywordsArray] = useState([]); // Initialize it as an empty array
  const [hashtagsArray, setHashtagsArray] = useState([]); // Initialize it as an empty array

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch("https://bee-aware-0831ce44e802.herokuapp.com/statistics/");
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const records = await response.json();
        const matchingRecord = records.find((r) => r.topic === topic);
        setRecord(matchingRecord || null);

        // Convert the record.keywords object into an array of keyword objects
        const keywords = matchingRecord?.keywords || {};
        const keywordsArray = Object.entries(keywords).map(([keyword, count]) => ({
          text: keyword,
          value: count,
        }));

        setKeywordsArray(keywordsArray); // Set the keywordsArray state with the converted data

        const hashtags = matchingRecord?.hashtags || {};
        const hashtagsArray = Object.entries(hashtags).map(([hashtag, count]) => ({
          text: hashtag,
          value: count,
        }));

        setHashtagsArray(hashtagsArray); // 

      } catch (error) {
        window.alert(error.message);
      }
    }

    getRecords();
  }, [topic]);

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  if (!record) {
    return null;
  }

  const hashtags = {
    sentimentCount: record.sentiment_count || {},
    engagementMetrics: Object.entries(record.engagement_metrics || {}),
    sentimentPerc: Object.entries(record.sentiment_percentages || {}),
    top_10_global: record.top_10_global || [],
    top_10_media: record.top_10_media || [],
    top_10_verified: record.top_10_verified || [],
    top_10_question: record.top_10_question || [],
  };

  let filteredTop10 = [];
  switch (selectedFilter) {
    case "top_10_global":
      filteredTop10 = hashtags.top_10_global;
      break;
    case "top_10_media":
      filteredTop10 = hashtags.top_10_media;
      break;
    case "top_10_verified":
      filteredTop10 = hashtags.top_10_verified;
      break;
    case "top_10_question":
      filteredTop10 = hashtags.top_10_question;
      break;
    default:
      filteredTop10 = hashtags.top_10_global;
      break;
    
  }

  const options = {
    //colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [15, 50],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 0,
    //rotationAngles: [0, 80],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };


  return (
    <div>
      {/* Pass the filteredTop10 data and the handleFilterChange function as props to the Record component */}
      <Record
        record={record}
        hashtags={hashtags}
        filteredTop10={filteredTop10}
        selectedFilter={selectedFilter}
        handleFilterChange={handleFilterChange} // Pass the handleFilterChange function
        options={options}
        keywordsArray={keywordsArray}
        hashtagsArray={hashtagsArray}
      />
    </div>
  )}

