import React from 'react';
import NavContainer from './containers/NavContainer';
import StructureVisualizationContainer from './containers/StructureVisualizationContainer';

const App: React.FC = () => (
  <div id="app">
    <NavContainer />
    <StructureVisualizationContainer showCluster={undefined} showNodes={undefined} showPods={undefined} showNamespaces={undefined} />
  </div>
);

export default App;
