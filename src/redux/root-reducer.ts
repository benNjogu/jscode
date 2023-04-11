import { combineReducers } from 'redux';
import cellReducer from './cell/cell.reducer';

const rootReducers = combineReducers({
  cell: cellReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
