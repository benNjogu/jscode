import { Fragment } from 'react';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import CellListItem from '../cell-list-item/cell-list-item.component';
import AddCell from '../add-cell/add-cell.component';
import { Cell } from '../../redux';

import './cell-list.style.css';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cell: { order, data } }) =>
    order.map((id: string) => data[id])
  );

  const renderedCells = cells.map((cell: Cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell prevCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell forceVisible={cells.length === 0} prevCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
