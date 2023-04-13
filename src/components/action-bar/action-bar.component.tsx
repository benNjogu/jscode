import { useActions } from '../../hooks/use-actions';
import CustomButton from '../custom-button/custom-button.component';
import './action-bar.style.css';

interface PropTypes {
  id: string;
}

const ActionBar: React.FC<PropTypes> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  const handleUp = () => {
    moveCell(id, 'up');
  };

  const handleDown = () => {
    moveCell(id, 'down');
  };

  const handleDelete = () => {
    deleteCell(id);
  };

  return (
    <div className="action-bar">
      <CustomButton type="fa-arrow-up" handleClick={handleUp} />
      <CustomButton type="fa-arrow-down" handleClick={handleDown} />
      <CustomButton type="fa-times" handleClick={handleDelete} />
    </div>
  );
};

export default ActionBar;
