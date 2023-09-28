import React, { useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { useParams } from 'react-router-dom';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart = ({ record }) => {
  const formatData = (record) => {
    let categories = ["Total", "Negative", "Positive", "Neutral"];
    let formattedData = {};

    categories.forEach(category => {
        formattedData[category] = [];
        for (let key in record) {
            // Check if the property format matches a date pattern
            if (/^\d{2}-\d{2}-\d{4}$/.test(key) && record[key][category]) {
                // If it's a date, push the respective data to the category array
                formattedData[category].push({
                    x: new Date(key.split('-').reverse().join('-')),
                    y: record[key][category],
                });
            }
        }
    });
    return formattedData;
};

const formattedRecord = formatData(record);

const options = {
    theme: "light2",
    animationEnabled: true,
    width: 600,
    title: {
        text: `Sentiment Analysis Overtime`
    },
    axisX: {
    },
    axisY: {
        title: "Counts",
        titleFontColor: "#6D78AD",
        lineColor: "#6D78AD",
        labelFontColor: "#6D78AD",
        tickColor: "#6D78AD"
    },
    toolTip: {
        shared: true
    },
    data: [
        {
            type: "spline",
            name: "Total",
            showInLegend: true,
            xValueFormatString: "DD MMM YYYY",
            yValueFormatString: "#,##0",
            dataPoints: formattedRecord.Total
        },
        {
            type: "spline",
            name: "Positive",
            showInLegend: true,
            xValueFormatString: "DD MMM YYYY",
            yValueFormatString: "#,##0",
            dataPoints: formattedRecord.Positive,
            color: "#76CC9D"
        },
        {
            type: "spline",
            name: "Neutral",
            showInLegend: true,
            xValueFormatString: "DD MMM YYYY",
            yValueFormatString: "#,##0",
            dataPoints: formattedRecord.Neutral,
            color: "#FADB7C"
        },
        {
            type: "spline",
            name: "Negative",
            showInLegend: true,
            xValueFormatString: "DD MMM YYYY",
            yValueFormatString: "#,##0",
            dataPoints: formattedRecord.Negative,
            color: "#F46161"
        }
    ]
};

    return (
        <CanvasJSChart options={options} />
    );
};

export default function LineChartsContainer() {
    const { topic } = useParams();
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function getRecords() {
            try {
                const response = await fetch("http://localhost:5050/general_info/");
                if (!response.ok) {
                    throw new Error(`An error occurred: ${response.statusText}`);
                }
                const records = await response.json();
                const matchingRecords = records.filter((r) => r.topic === topic);
                setRecords(matchingRecords);
            } catch (error) {
                window.alert(error.message);
            }
        }

        getRecords();
    }, [topic]);

    if (!records.length) {
        return <div>No record found</div>;
    }

    return (
        <div>
            {records.map((record) => (
                <LineChart record={record} key={record.topic} />
            ))}
        </div>
    );
}
