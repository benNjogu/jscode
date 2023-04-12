import { useState, useEffect } from 'react';
import bundle from '../../bundler';

import CodeEditor from '../code-editor/code-editor.component';
import Preview from '../preview/preview.component';
import Resizable from '../resizable/resizable.component';
import { Cell } from '../../redux';
import { useActions } from '../../hooks/use-actions';

import './code-cell.style.css';

interface PropTypes {
  cell: Cell;
}

const CodeCell: React.FC<PropTypes> = ({ cell }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);

      setCode(output.code);
      setError(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction="vertical">
      <div className="container">
        <Resizable direction="horizontal">
          <CodeEditor
            onChange={(value: string) => updateCell(cell.id, value)}
            initialValue={cell.content}
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
