import React from 'react';
import TopNavBar from '../components/TopNavBar';
import LeftNavBar from '../components/LeftNavBar';

const NavContainer: React.FC = () => {
  return (
    <div>
      <TopNavBar />
      <div style={{ display: 'flex', borderTop: '1px solid white' }}>
        <LeftNavBar />
      </div>
    </div>
  );
};

export default NavContainer;

