import { Cell } from '../../redux';
import TextEditor from '../text-editor/text-editor.component';
import CodeCell from '../code-cell/code-cell.component';
import './cell-list-item.style.css';

interface PropTypes {
  cell: Cell;
}

const CellListItem: React.FC<PropTypes> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') child = <CodeCell cell={cell} />;
  else child = <TextEditor cell={cell} />;

  return <div>{child}</div>;
};

export default CellListItem;
