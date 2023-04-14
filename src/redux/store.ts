import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

import { bundlerMiddleware } from './middlewares/bundler-middleware';
import { CellActionTypes } from './action-types';

const middleWares = [bundlerMiddleware, thunk];

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleWares)
);

