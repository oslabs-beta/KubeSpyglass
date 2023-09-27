import React from 'react';
import MetricChart from '../components/MetricChart';

const ChartContainer = async (props) => {
  try {
    const fetchedData = await fetch('localhost:4000/monitoring/metrics_data');
    const userData = fetchedData.json();

    const chartData = {};

    //expected end result of this loop: Object with a number of objects equal to the metrics, each of which will then contain a number of objects
    //equal to the number of data points, which will in turn contain a number of objects equal to the nubmer of containers which house the value
    const time = userData[i].time;
    for (const i in userData) {
      const dataArray = userData[i].data.dataArray;

      for (const v in dataArray) {
        const currentMetric = v.metric;
        if (chartData[currentMetric] !== undefined) {
          const newDataPoint = {};
          newDataPoint[v.container] = {
            container: v.container,
            point: { x: time, y: v.val },
          };
          chartData[currentMetric].data[time] = Object.assign(
            chartData[currentMetric].data[time],
            newDataPoint
          );
        } else {
          chartData[currentMetric] = { metric: currentMetric, data: {} };
          chartData[currentMetric].data[time] = {};
          chartData[currentMetric].data[time][v.container] = {
            container: v.container,
            point: { x: time, y: v.val },
          };
        }
      }
    }

    const charts = [];
    for (const i in chartData) {
      charts.push(<MetricChart data={i} />);
    }

    return <div id='chartContainer'>{charts}</div>;
  } catch (error) {
    console.log('you encountered an error acquiring data for the charts');
    return null;
  }
};

export default ChartContainer;
