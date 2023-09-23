import React from 'react';
import {useState} from 'react';
import fs from 'fs';

import Container from '@mui/material/Container'

import Tree from 'react-d3-tree';

import BasicMenu from '../components/SVBasicMenu'

export default function StructureVisualizationContainer() {
  const [tree, setTree] = useState({});
  
  const buildTree = () => {
    //currently uses the sampleStructure.json file
    const data = fs.readFileSync('../../sampleStructure.json');

    //need to implement get request to /Monitoring/structure to get the structure object
    //const result = await axios.get('localhost:3000/monitoring/structure')
    //const data = result.data;
    const nodes = data.nodes;
    const pods = data.pods;
    const services = data.services;
    const namespaces = data.namespaces;
    const tree = {};
    tree.name = 'K8s Cluster';
    tree.children = [{name: 'nodes', children: []}, {name: 'services', children: []}, {name: 'namespaces', children: []}];
    for(const node of nodes){
      const nodeObj = {name: node.name, attributes: node.spec, children: [{name: 'pods', children:[]}]};
      for(const pod of pods){
        nodeObj.children[0].children.push({name: 'volumes', children: []});
        nodeObj.children[0].children.push({name: 'containers', children: []});
        for(const volume of pod.volumes){
          nodeObj.children[0].children[0].children.push({name: volume.name, attributes: volume.projected, children: []});
        }
        for(const container of pod.containers){
          nodeObj.children[0].children[1].children.push({name: container.name, attributes: container, children: []});
        }
      }
      tree.children[0].children.push(nodeObj);
    } 
    for(const service of services){
      tree.children[1].children.push({name: service});
    }
    for(const namespace of namespaces){
      tree.children[2].children.push({name: namespace});
    }
    setTree(tree);
  }

  buildTree();


  return (
    <Container>
      <Tree data={tree}/>
    </Container>
  )


}