import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MetricChart = async (props) => {
  // const [data, setData] = useState([]);

  // const pushData = (newData) => {
  //   setData([...data, newData]);
  // };

  const { data } = props;

  const chartData = {};

  for (const i in data.data) {
    if (Object.keys(chartData).length <= 0) {
      for (const x in i) {
        chartData[x.container] = {
          name: x.container,
          type: 'line',
          dataPoints: [x.point],
        };
      }
    } else {
      for (const x in i) {
        chartData[x.container].dataPoints.push(x.point);
      }
    }
  }

  const options = {
    interactivityEnabled: true,
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light2', // "light1", "dark1", "dark2"
    title: {
      text: data.metric,
    },
    axisY: {
      title: 'Bounce Rate',
      suffix: '%',
    },
    axisX: {
      title: 'Week of Year',
      prefix: 'W',
      interval: 2,
    },
    data: [...chartData],
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default MetricChart;
