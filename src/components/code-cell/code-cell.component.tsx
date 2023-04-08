import { useState, useEffect } from 'react';
import bundle from '../../bundler';

import CodeEditor from '../code-editor/code-editor.component';
import Preview from '../preview/preview.component';
import Resizable from '../resizable/resizable.component';

import './code-cell.style.css';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);

      setCode(output.code);
      setError(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div className="container">
        <Resizable direction="horizontal">
          <CodeEditor
            onChange={(value: string) => setInput(value)}
            initialValue="const sum = add(3, 4);"
          />
        </Resizable>
        <Preview code={code} err={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;

/**
import React from 'react';
import ReactDom from 'react-dom';

const App = () => <h1>Hi there!</h1>;

ReactDom.render(
  <App />,
  document.querySelector('#root')
);
 */
