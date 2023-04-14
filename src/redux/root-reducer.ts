import { combineReducers } from 'redux';
import cellReducer from './cell/cell.reducer';
import bundleReducer from './bundle/bundle.reducer';

const rootReducers = combineReducers({
  cell: cellReducer,
  bundle: bundleReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
