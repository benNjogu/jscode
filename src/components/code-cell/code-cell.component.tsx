import { useState } from 'react';
import bundle from '../../bundler';

import CodeEditor from '../code-editor/code-editor.component';
import Preview from '../preview/preview.component';

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const output = await bundle(input);

    setCode(output);
  };

  return (
    <div className="container">
      <CodeEditor
        onChange={(value: string) => setInput(value)}
        initialValue="const sum = add(3, 4);"
      />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
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
