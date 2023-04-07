// @ts-nocheck
import { useState, useEffect, useRef } from 'react';
import bundle from './bundler';

import CodeEditor from './components/code-editor/code-editor.component';
import Preview from './components/preview/preview.component';
import './App.css';

const App = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const output = await bundle(input);

    setCode(output);
  };

  return (
    <div className="container">
      <CodeEditor
        onChange={(value) => setInput(value)}
        initialValue="const sum = add(3, 4);"
      />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Preview code={code} />
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