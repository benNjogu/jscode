import './App.css';
import CodeCell from './components/code-cell/code-cell.component';

const App = () => {
  return (
    <div>
      <CodeCell />
      <CodeCell />
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
