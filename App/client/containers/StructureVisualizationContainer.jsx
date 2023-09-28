import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tree } from 'react-d3-tree';

export default function StructureVisualizationContainer({
  showCluster,
  showNodes,
  showPods,
  showNamespaces,
}) {
  const [treeData, setTreeData] = useState(null);
  const [selectedNamespace, setSelectedNamespace] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/monitoring/structure/static');
        const data = response.data;

        // Initialize an empty tree structure
        const tree = {
          name: 'K8s Clusters',
          children: [],
        };

        if (showNodes && data.nodes) {
          const nodes = {
            name: 'Nodes',
            children: [],
          };

          if (showPods && data.pods) {
            data.nodes.forEach((node) => {
              const nodeItem = {
                name: node.name,
                attributes: node.spec,
                children: [],
              };

              if (showNamespaces && data.namespaces) {
                const namespaces = {
                  name: 'Namespaces',
                  children: [],
                };

                data.namespaces.forEach((namespace) => {
                  // Display the namespace as a child of the node
                  const namespaceItem = {
                    attributes: {
                      namespace: namespace, // Keep the 'namespace:' unindented
                    },
                    children: [] // Create an array to hold the attributes with spacing
                  };

                  if (showPods && data.pods) {
                    data.pods.forEach((pod) => {
                      if (pod.namespace === namespace.name) {
                        const podItem = {
                          name: '    ' + pod.name, // Add spaces before the name
                          attributes: pod.spec,
                          children: [],
                        };

                        if (showPods) {
                          pod.containers.forEach((container) => {
                            const containerItem = {
                              name: '        ' + container.name, // Add more spaces as needed
                              attributes: container,
                            };
                            podItem.children.push(containerItem);
                          });
                        }

                        namespaceItem.children.push(podItem);
                      }
                    });
                  }

                  namespaces.children.push(namespaceItem);
                });

                nodeItem.children.push(namespaces);
              }

              nodes.children.push(nodeItem);
            });
          }

          tree.children.push(nodes);
        }

        setTreeData(tree);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [showCluster, showNodes, showPods, showNamespaces]);

  const handleNamespaceClick = (namespace) => {
    // Set the clicked namespace as the selected namespace
    setSelectedNamespace(namespace);
  };

  const customNodeRenderer = ({ nodeData }) => {
    // Assign colors based on node depth
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff'];
    const color = colors[nodeData.depth % colors.length] || 'lightblue'; // Default color

    return (
      <g>
        <circle r={10} fill={color} />
        <text>{nodeData.name}</text>
      </g>
    );
  };

  // Calculate the center position of the tree with an offset
  const centerX = window.innerWidth / 2.5;
  const centerY = 100; // Adjust the vertical position here

  // Set the initial tree position to center it on the page
  const initialTreePosition = { x: centerX, y: centerY };

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {treeData && (
        <Tree
          data={treeData}
          orientation="vertical"
          translate={initialTreePosition} // Set the initial position with offset
          nodeSvgShape={{ shapeProps: { r: 10, fill: 'lightblue' } }}
          onClick={(nodeData) => {
            if (nodeData.name && nodeData.name !== 'K8s Cluster') {
              handleNamespaceClick(nodeData.name);
            }
          }}
          nodeLabelComponent={{
            render: customNodeRenderer,
            foreignObjectWrapper: {
              y: -10,
            },
          }}
        />
      )}
    </div>
  );
}