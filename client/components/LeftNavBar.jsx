import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';
import Switch from '@mui/material/Switch'; 

const darkGreyColor = '#444';
const lighterGreyColor = '#667';

const StyledLeftNavBarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '250px',
  backgroundColor: darkGreyColor,
  color: '#fff',
  borderRight: '1px solid #555',
});

const StyledListItem = styled(ListItem)({
  '&:hover': {
    backgroundColor: lighterGreyColor,
  },
});

const LeftNavBar = () => {
  const [podToggle, setPodToggle] = useState(false); 
  const [serviceToggle, setServiceToggle] = useState(false); 

  const handlePodToggle = () => {
    setPodToggle(!podToggle); // Toggle the state
  };

  const handleServiceToggle = () => {
    setServiceToggle(!serviceToggle); // Toggle the state
  };

  return (
    <StyledLeftNavBarContainer>
      <List>
        <StyledListItem>
          <ListItemText primary="Nodes" />
          <Switch
            checked={podToggle}
            onChange={handlePodToggle}
            color="primary"
          />
        </StyledListItem>
        <StyledListItem>
          <ListItemText primary="Pods" />
          <Switch
            checked={serviceToggle}
            onChange={handleServiceToggle}
            color="primary"
          />
        </StyledListItem>
      </List>
      <Divider />
    </StyledLeftNavBarContainer>
  );
};

export default LeftNavBar;