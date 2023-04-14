import CellList from './components/cell-list/cell-list.component';

import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <CellList />
    </div>
  );
};

export default App;

/**
import React from 'react';
import ReactDom from 'react-dom';

const App = () => <h1>Hi there!</h1>;

ReactDom.render(
  <App />,
  document.querySelector('#root')
);
 */
