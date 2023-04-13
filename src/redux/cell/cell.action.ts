import { ActionType } from '../action-types';
import {
  Action,
  UpdateCell,
  DeleteCell,
  InsertCellAfter,
  MoveCell,
  DirectionType,
} from '../actions';
import { CellTypes } from './cell';

export const updateCell = (id: string, content: string): UpdateCell => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const deleteCell = (id: string): DeleteCell => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};

export const insertCellAfter = (
  id: string | null,
  type: CellTypes
): InsertCellAfter => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type,
    },
  };
};

export const moveCell = (id: string, direction: DirectionType): MoveCell => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};
