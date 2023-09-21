import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Import the ArrowDropDown icon

const darkGreyColor = '#444';

// const TopNavBar = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

const TopNavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // const handleMenuClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const boxSx: React.CSSProperties = {
    cursor: 'pointer',
    backgroundColor: darkGreyColor,
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kube's Spyglass
        </Typography>
        <Box
          component="div" // Specify the component type
          onClick={handleMenuClick}
          sx={boxSx}
        >
          View
          <ArrowDropDownIcon /> {/* Add the ArrowDropDown icon */}
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        >
          <MenuItem>Graph</MenuItem>
          <MenuItem>Table</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;