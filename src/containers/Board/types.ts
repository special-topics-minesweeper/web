import { Difficulty } from "../Game/types";

export interface ICell {
  isOpen: boolean;
  isBomb: boolean;
  isFlagged: boolean;
}

export interface IBoardStyles {
  width: number;
  height: number;
}

export interface IBoard {
  difficulty: Difficulty;
  data: ICell[];
  setData: any;
}

