import { Difficulty, GAME_STATUS } from "../Game/types";
export enum Cell {
  OPEN = 'open',
  BOMB = 'bomb',
  CLOSED = 'closed',
  FLAGGED = 'flagged',
  GUESSED = 'guessed',
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
  data: ICell[];
  setData: any;
  setFlagCount: any;
  setGameStatus: any;
  gameStatus: GAME_STATUS;
  setError: any;
}

