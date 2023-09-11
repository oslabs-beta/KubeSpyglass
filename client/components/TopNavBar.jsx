import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Import the ArrowDropDown icon

const darkGreyColor = '#444';

const TopNavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kube's Spyglass
        </Typography>
        <Box
          variant="contained"
          color="text.primary"
          onClick={handleMenuClick}
          sx={{
            cursor: 'pointer',
            backgroundColor: darkGreyColor,
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            display: 'flex', // Display the carrot and text in a row
            alignItems: 'center', // Center the carrot and text vertically
          }}
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