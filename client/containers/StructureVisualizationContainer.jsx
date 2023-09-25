import React, { useEffect, useState } from "react";
import axios from "axios";
// import Container from '@mui/material/Container';
import Tree from "react-d3-tree";

export default function StructureVisualizationContainer() {
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3005/api/structure"); // Fetch data from the server endpoint
        const data = response.data; // Process your data here and map it into a tree structure

        const tree = {
          name: "K8s Cluster",
          children: [],
        }; // Map your data into the tree structure

        data.nodes.forEach((node) => {
          const nodeObj = {
            name: node.name,
            attributes: node.spec,
            children: [],
          };

          if (data.pods) {
            nodeObj.children.push({
              name: "pods",
              children: data.pods.map((pod) => ({
                name: pod.name, // Add other pod attributes as needed
              })),
            });
          }

          tree.children.push(nodeObj);
        });

        setTreeData(tree);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, like componentDidMount

  return (
    <div style={{ height: "600px", overflow: "auto" }}>
      {treeData && <Tree data={treeData} orientation="vertical" />}
    </div>
  );
}
