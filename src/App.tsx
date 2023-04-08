import CodeCell from './components/code-cell/code-cell.component';
import TextEditor from './components/text-editor/text-editor.component';

import './App.css';

const App = () => {
  return (
    <div>
      <TextEditor />
      {/* <CodeCell /> */}
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
