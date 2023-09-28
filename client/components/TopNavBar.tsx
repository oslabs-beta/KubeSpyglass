import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InstallButton from '../components/InstallButton'; // Import the InstallButton component

const darkGreyColor = '#444';

const TopNavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kube's Spyglass
        </Typography>
        {/* Render the InstallButton component */}
        <InstallButton />
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;