import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';
import Switch from '@mui/material/Switch';

const darkGreyColor = '#444';
const lighterGreyColor = '#667';

interface LeftNavBarProps {
  showCluster: boolean;
  showNodes: boolean;
  showPods: boolean;
  showNamespaces: boolean;
  setShowCluster: (value: boolean) => void;
  setShowNodes: (value: boolean) => void;
  setShowPods: (value: boolean) => void;
  setShowNamespaces: (value: boolean) => void;
}

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

const LeftNavBar: React.FC<LeftNavBarProps> = ({
  showCluster,
  showNodes,
  showPods,
  showNamespaces,
  setShowCluster,
  setShowNodes,
  setShowPods,
  setShowNamespaces,
}) => {
  return (
    <StyledLeftNavBarContainer>
      <List>
        {/* <StyledListItem>
          <ListItemText primary="Cluster" />
          <Switch
            checked={showCluster}
            onChange={() => {
              setShowCluster(!showCluster);
            }}
            color="primary"
          />
        </StyledListItem> */}
        <StyledListItem>
          <ListItemText primary="Nodes" />
          <Switch
            checked={showNodes}
            onChange={() => {
              setShowNodes(!showNodes);
            }}
            color="primary"
          />
        </StyledListItem>
        <StyledListItem>
          <ListItemText primary="Pods" />
          <Switch
            checked={showPods}
            onChange={() => {
              setShowPods(!showPods);
            }}
            color="primary"
          />
        </StyledListItem>
        <StyledListItem>
          <ListItemText primary="Namespaces" />
          <Switch
            checked={showNamespaces}
            onChange={() => {
              setShowNamespaces(!showNamespaces);
            }}
            color="primary"
          />
        </StyledListItem>
      </List>
      <Divider />
    </StyledLeftNavBarContainer>
  );
};

export default LeftNavBar;