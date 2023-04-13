import { useActions } from '../../hooks/use-actions';
import { CellTypes } from '../../redux';
import CustomButton from '../custom-button/custom-button.component';
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
        <CustomButton
          style="is-rounded"
          handleClick={() => handleClick('code')}
          size="is-small"
          type="fa-plus"
          text="Code"
        />
        <CustomButton
          style="is-rounded"
          handleClick={() => handleClick('text')}
          size="is-small"
          type="fa-plus"
          text="Text"
        />
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
