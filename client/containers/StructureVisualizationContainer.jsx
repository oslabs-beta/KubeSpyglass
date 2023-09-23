import React from 'react';
import {useState} from 'react'

import Container from '@mui/material/Container'

import Tree from 'react-d3-tree';

import BasicMenu from '../components/SVBasicMenu'

export default function StructureVisualizationContainer() {
  const [nodes, setNodes] = useState([]);
  const [pods, setPods] = useState([]);
  const [services, setServices] = useState([]);
  const [namespaces, setNamespaces] = useState([]);

  return (
    <Container>

    </Container>
  )


}