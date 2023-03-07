import React from 'react';
import Chart from '../../charts/lineCharts/LineCharts';

type Props = {};

const DashboardIndex = (props: Props) => {
  return (
    <div style={{width:"100%", height:"500px"}}><Chart/></div>
  );
};

export default DashboardIndex;