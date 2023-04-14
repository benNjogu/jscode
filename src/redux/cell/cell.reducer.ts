import produce from 'immer';

import { CellActionTypes } from '../action-types';
import { Action } from '../actions';
import { Cell } from './cell';

interface CellState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const INITIAL_STATE: CellState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const cellReducer = produce(
  (
    state: CellState | any = INITIAL_STATE,
    action: Action
  ): CellState | void => {
    switch (action.type) {
      case CellActionTypes.UPDATE_CELL:
        const { id, content } = action.payload;
        state.data[id].content = content;

        return state;
      case CellActionTypes.DELETE_CELL:
        delete state.data[action.payload];
        state.order = state.order.filter((id: string) => id !== action.payload);

        return state;
      case CellActionTypes.MOVE_CELL:
        const { direction } = action.payload;
        const index = state.order.findIndex(
          (id: string) => id === action.payload.id
        );
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex > state.order.length - 1) {
          return state;
        }

        state.order[index] = state.order[targetIndex];
        state.order[targetIndex] = action.payload.id;

        return state;
      case CellActionTypes.INSERT_CELL_AFTER:
        const cell: Cell = {
          content: '',
          type: action.payload.type,
          id: randomId(),
        };

        state.data[cell.id] = cell;

        const foundIndex = state.order.findIndex(
          (id: string) => id === action.payload.id
        );
        if (foundIndex < 0) {
          state.order.unshift(cell.id);
        } else {
          state.order.splice(foundIndex + 1, 0, cell.id);
        }

        return state;
      default:
        return state;
    }
  }
);

const randomId = () => {
  return Math.random().toString(36).substring(2, 5);
};

export default cellReducer;
