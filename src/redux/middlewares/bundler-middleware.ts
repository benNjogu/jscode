import { BundelActionTypes, CellActionTypes } from '../action-types';
import { Middleware } from './middleware';
import bundle from '../../bundler';

let timer: any;
export const bundlerMiddleware: Middleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type !== CellActionTypes.UPDATE_CELL) {
      return;
    }
    const {
      cell: { data: cellData },
    } = getState();
    const cell = cellData[action.payload.id];
    if (cell.type === 'text') {
      return;
    }

    clearTimeout(timer);
    timer = setTimeout(async () => {
      const result = await bundle(action.payload.content);
      dispatch({
        type: BundelActionTypes.BUNDLE_CREATED,
        payload: {
          cellId: action.payload.id,
          bundle: result,
        },
      });
    }, 1000);
  };
