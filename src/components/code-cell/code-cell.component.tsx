import CodeEditor from '../code-editor/code-editor.component';
import Preview from '../preview/preview.component';
import Resizable from '../resizable/resizable.component';
import { Cell } from '../../redux';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

import './code-cell.style.css';

interface PropTypes {
  cell: Cell;
}

const CodeCell: React.FC<PropTypes> = ({ cell }) => {
  const { updateCell } = useActions();
  //@ts-ignore
  const bundle = useTypedSelector((state) => state.bundle[cell.id]);
  //const { code, err: error } = bundle;

  return (
    <Resizable direction="vertical">
      <div className="container">
        <Resizable direction="horizontal">
          <CodeEditor
            onChange={(value: string) => updateCell(cell.id, value)}
            initialValue={cell.content}
          />
        </Resizable>
        <Preview code={bundle?.code} err={bundle?.err} />
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
