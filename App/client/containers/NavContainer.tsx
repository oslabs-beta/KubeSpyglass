import React, { useState } from 'react';
import TopNavBar from '../components/TopNavBar';
import LeftNavBar from '../components/LeftNavBar';
import StructureVisualizationContainer from '../containers/StructureVisualizationContainer';

const NavContainer: React.FC = () => {
  const [showCluster, setShowCluster] = useState<boolean>(false);
  const [showNodes, setShowNodes] = useState<boolean>(false);
  const [showPods, setShowPods] = useState<boolean>(false);
  const [showNamespaces, setShowNamespaces] = useState<boolean>(false); // Add state for namespaces

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopNavBar />
      <div style={{ display: 'flex', flex: 1 }}>
        <LeftNavBar
          showCluster={showCluster}
          showNodes={showNodes}
          showPods={showPods}
          showNamespaces={showNamespaces} // Pass state for namespaces
          setShowCluster={setShowCluster}
          setShowNodes={setShowNodes}
          setShowPods={setShowPods}
          setShowNamespaces={setShowNamespaces} // Pass function for namespaces
        />
        <StructureVisualizationContainer
          showCluster={showCluster}
          showNodes={showNodes}
          showPods={showPods}
          showNamespaces={showNamespaces} // Pass state for namespaces
        />
      </div>
    </div>
  );
};

export default NavContainer;