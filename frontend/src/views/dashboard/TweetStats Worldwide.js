import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, LabelList, Label, Tooltip } from "recharts";
import ReactWordcloud from "react-wordcloud"; 
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css'
import verifiedImage from '../../assets/images/verified.png';
import { FaHeart, FaRetweet, FaQuoteLeft, FaReply, FaEye, FaUser, FaRegSmileBeam, FaRegFrown, FaRegMeh } from 'react-icons/fa';


export default function Sentiment() {
  const [records, setRecords] = useState([]);

  // Estado para armazenar o filtro selecionado, padrão é 'top_10_global'
  const [selectedFilter, setSelectedFilter] = useState("top_10_global");
  const [keywordsArray, setKeywordsArray] = useState([]); // Inicializa como um array vazio
  const [hashtagsArray, setHashtagsArray] = useState([]); // Inicializa como um array vazio

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch("http://localhost:5050/statistics_general/");

        if (!response.ok) {
          throw new Error(`Ocorreu um erro: ${response.statusText}`);
        }

        const records = await response.json();
        console.log('Fetched records:', records);

        setRecords(records);

        const keywords = records[0].keywords || {};
        const keywordsArray = Object.entries(keywords).map(([keyword, count]) => ({
          text: keyword,
          value: count,
        }));
        
        setKeywordsArray(keywordsArray);
        
        const hashtags = records[0].hashtags || {};
        const hashtagsArray = Object.entries(hashtags).map(([hashtag, count]) => ({
          text: hashtag,
          value: count,
        }));
        
        console.log('hashtag array', hashtagsArray);
        
        setHashtagsArray(hashtagsArray);
      } catch (error) {
        window.alert(error.message);
      }
    }

    getRecords();
  }, []);

  // Função para lidar com a mudança de filtro
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const hashtags = {
    top_10_global: records[0]?.top_10_global || [],
    top_10_media: records[0]?.top_10_media || [],
    top_10_verified: records[0]?.top_10_verified || [],
    top_10_question: records[0]?.top_10_question || [],
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
    //cores: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
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

  const CustomizedBar = (props) => {
    const { x, y, width, height } = props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={4} // Ajustar o raio para mudar o grau de arredondamento
          ry={4} // Ajustar o raio para mudar o grau de arredondamento
          fill={props.fill}
        />
      </g>
    );
  };

  const CustomizedLabel = ({ x, y, value, align }) => (
    <text
      x={x}
      y={y}
      dy={-12}
      fill="black"
      fontSize={20}
      fontWeight="bold"
      textAnchor={align}
    >
      {value}
    </text>
  );

  const CustomizedLabelSentiment = ({ x, y, width, value, fill }) => {
    const labelX = x + width + 10; // Ajustar a coordenada x para posicionar as etiquetas em relação à barra
    const yOffset = -8;
    const lineHeight = 16; // Ajustar a altura da linha conforme necessário
    const valueFontSize = 25; // Tamanho da fonte para value.value
    const percFontSize = 18; // Tamanho da fonte para value.perc
    const lineSpacing = 20; // Ajustar o espaçamento entre os dois valores

    if (value) {
      const labelValue = `${value.value}\n${value.perc.toFixed(2)}%`;
      const values = labelValue.split('\n');

      return (
        <g>
          {values.map((val, index) => (
            <text
              key={index}
              x={500} // Definir um valor fixo para a coordenada x
              y={y + (lineHeight * index) + yOffset}
              fill="black"
              textAnchor="end" // Alinhar as etiquetas à direita
              dominantBaseline="middle" // Centralizar verticalmente as etiquetas
            >
              <tspan
                fontSize={index === 0 ? valueFontSize : percFontSize}
                dy={index === 1 ? lineSpacing : 0}
                fontWeight={index === 0 ? "bold" : "normal"}
              >
                {val}
              </tspan>
            </text>
          ))}
        </g>
      );
    }

    return null;
  };

  // Preparar os dados para o gráfico
  const chartData = records.map((record) => ({
    negative: { value: record.sentiment_count.Negative, perc: record.sentiment_percentages.Negative, sqrtValue: (record.sentiment_count.Negative)/1.1 },
    neutral: { value: record.sentiment_count.Neutral, perc: record.sentiment_percentages.Neutral, sqrtValue: (record.sentiment_count.Neutral)/1.1 - 35 },
    positive: { value: record.sentiment_count.Positive, perc: record.sentiment_percentages.Positive, sqrtValue: (record.sentiment_count.Positive)/1.1 }
  }));

  // Esta seção a seguir exibirá os registros e o gráfico
  return (
    <div>
      <h2>TweetStats Worldwide</h2>
      <br />
      <table className="home-table1" style={{ display: 'flex', alignItems: 'center', width:'100%', minWidth: '1280px', maxWidth:'1280px' }}>
      <div className="container text">
        <div className="row align-items-start" style={{marginTop: '30px'}}>
          <div className="col-lg-6 col-md-4 col-sm-10">
      <div style={{ width: "500px", height: "300px", marginTop: '10px' }}>
        <ResponsiveContainer>
          <BarChart data={chartData} layout="vertical" barGap={55}>
            <XAxis type="number" hide />
            <YAxis type="category" hide />
            <Legend iconType="none" />
            <Bar
              dataKey="positive.sqrtValue"
              fill="#76CC9D"
              name="Positive"
              shape={<CustomizedBar fill="#76CC9D" />} // Usar o componente de forma personalizada para a barra
            >
              <LabelList
                dataKey="positive"
                position="right"
                content={(props) => <CustomizedLabelSentiment {...props} />}
              />
              <LabelList
                dataKey="positive"
                position="top"
                content={({ x, y }) => <CustomizedLabel x={x} y={y} value="Positive" align="left" />}
              />
            </Bar>
            <Bar
              dataKey="neutral.sqrtValue"
              fill="#FADB7C"
              name="Neutral"
              shape={<CustomizedBar fill="#FADB7C" />} // Usar o componente de forma personalizada para a barra
            >
              <LabelList
                dataKey="neutral"
                position="right"
                content={(props) => <CustomizedLabelSentiment {...props} />}
              />
              <LabelList
                dataKey="neutral"
                position="top"
                content={({ x, y }) => <CustomizedLabel x={x} y={y} value="Neutral" align="left" />}
              />
            </Bar>
            <Bar
              dataKey="negative.sqrtValue"
              fill="#F46161"
              name="Negative"
              shape={<CustomizedBar fill="#F46161" />} // Usar o componente de forma personalizada para a barra
            >
              <LabelList
                dataKey="negative"
                position="right"
                content={(props) => <CustomizedLabelSentiment {...props} />}
              />
              <LabelList
                dataKey="negative"
                position="top"
                content={({ x, y }) => <CustomizedLabel x={x} y={y} value="Negative" align="left" />}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        </div>
        </div>
        <div className="col-lg-6 col-md-4 col-sm-10">
        <div style={{ width: "600px", height: "270px", marginTop:'10px' }}>
              <ReactWordcloud options={options} words={keywordsArray} />
            </div>
      </div>

      </div>
      </div>
      </table>
      <br></br>
      <div className="container text">
        <div className="row align-items-start">
          <div className="col-lg-8 col-md-6 col-sm-12">
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
                <br />
                {filteredTop10.length > 0 ? (
                  filteredTop10.map((entry, index) => (
                    <div key={index} style={{ marginBottom: '20px', width: '1270px', border: '1px solid #ccc', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{ marginRight: '10px', marginTop: '6px' }}>
                          <img src={entry.profile_photo} alt="Perfil" style={{ width: '65px', marginLeft: '5px' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <div>
                            <strong>@{entry.username}</strong> {entry.verified && <img src={verifiedImage} alt="Verificado" style={{ width: '13px', height: '13px', verticalAlign: 'middle', marginBottom: '2px' }} />}
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
                      <div style={{ marginLeft: '75px', marginBottom: '5px' }}>
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
                  <p>Não há dados disponíveis para o filtro selecionado.</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6" style={{ marginLeft: '20px', marginTop: '20px', alignItems: 'center' }}>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}
