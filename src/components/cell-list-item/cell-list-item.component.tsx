import { Cell } from '../../redux';
import TextEditor from '../text-editor/text-editor.component';
import CodeCell from '../code-cell/code-cell.component';
import ActionBar from '../action-bar/action-bar.component';

import './cell-list-item.style.css';

interface PropTypes {
  cell: Cell;
}

const CellListItem: React.FC<PropTypes> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }

  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;
