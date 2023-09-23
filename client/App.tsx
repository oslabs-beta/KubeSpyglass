/**
 * ************************************
 *
 * @module  App.jsx
 * @author 
 * @date
 * @description
 *
 * ************************************
 */

import React from 'react';
import NavContainer from './containers/NavContainer';
import StructureVisualizationContainer from './containers/StructureVisualizationContainer';

const App: React.FC = () => (
  <div id="app">
   <NavContainer />
   <StructureVisualizationContainer />
  </div>
);

export default App;