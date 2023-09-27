import React from 'react';
import TopNavBar from '../components/TopNavBar';
import LeftNavBar from '../components/LeftNavBar';
import ChartContainer from '../containers/ChartContainer.jsx';

const NavContainer: React.FC = () => {
  return (
    <div>
      <TopNavBar />
      <div style={{ display: 'flex', borderTop: '1px solid white' }}>
        <LeftNavBar />
      </div>
      <ChartContainer />
    </div>
  );
};

export default NavContainer;
