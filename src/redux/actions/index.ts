import { BundelActionTypes, CellActionTypes } from '../action-types';
import { CellTypes } from '../cell/cell';

export type DirectionType = 'up' | 'down';

export interface MoveCell {
  type: CellActionTypes.MOVE_CELL;
  payload: {
    id: string;
    direction: DirectionType;
  };
}

export interface DeleteCell {
  type: CellActionTypes.DELETE_CELL;
  payload: string;
}

export interface InsertCellAfter {
  type: CellActionTypes.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

export interface UpdateCell {
  type: CellActionTypes.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export interface BundleCreated {
  type: BundelActionTypes.BUNDLE_CREATED;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      err: string;
    };
  };
}

export type Action =
  | MoveCell
  | DeleteCell
  | InsertCellAfter
  | UpdateCell
  | BundleCreated;
