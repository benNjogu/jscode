import { useActions } from '../../hooks/use-actions';
import { CellTypes } from '../../redux';
import './add-cell.style.css';

interface PropTypes {
  prevCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<PropTypes> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  const handleClick = (type: CellTypes) => {
    insertCellAfter(prevCellId, type);
  };

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => handleClick('code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => handleClick('text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
