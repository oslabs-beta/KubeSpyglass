import React from 'react';
import TopNavBar from '../components/TopNavBar';
import LeftNavBar from '../components/LeftNavBar';

const MainContainer = () => {
  return (
    <div>
      <TopNavBar />
      <div style={{ display: 'flex', borderTop: '1px solid white' }}>
        <LeftNavBar />
      </div>
      <iframe src='https://eltoussaint.grafana.net/dashboard/snapshot/EYeMH2uPQR0NI9XdLI737dQeSXyfEjdC'></iframe>
    </div>
  );
};

export default MainContainer;
