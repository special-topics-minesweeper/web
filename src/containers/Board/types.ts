import { Difficulty } from "../Game/types";
export enum Cell {
  OPEN = 'open',
  BOMB = 'bomb',
  CLOSED = 'closed',
  FLAGGED = 'flagged',
}
export interface ICell {
  type: Cell;
  bomb_neighbors_count: number;
}

export interface IBoardStyles {
  width: number;
  height: number;
}

export interface IBoard {
  difficulty: Difficulty;
  gameId: string;
  data: ICell[];
  setData: any;
}

