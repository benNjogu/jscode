import { useTypedSelector } from '../../hooks/use-typed-selector';
import CellListItem from '../cell-list-item/cell-list-item.component';
import { Cell } from '../../redux';

import './cell-list.style.css';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cell: { order, data } }) =>
    order.map((id: string) => data[id])
  );

  const renderedCells = cells.map((cell: Cell) => (
    <CellListItem key={cell.id} cell={cell} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;
