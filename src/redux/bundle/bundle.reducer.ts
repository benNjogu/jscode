import produce, { Immer } from 'immer';

import { BundelActionTypes } from '../action-types';
import { Action } from '../actions';

interface BundleState {
  [key: string]: {
    code: string;
    err: string;
  };
}

const INITIAL_STATE: BundleState = {};

const bundleReducer = produce(
  (state: BundleState = INITIAL_STATE, action: Action): BundleState => {
    switch (action.type) {
      case BundelActionTypes.BUNDLE_CREATED:
        state[action.payload.cellId] = action.payload.bundle;

        return state;
      default:
        return state;
    }
  }
);

export default bundleReducer;
