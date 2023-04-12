import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CellActions } from '../redux';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(CellActions, dispatch);
};
