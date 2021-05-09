export interface IBoard {
  width: number;
  height: number;
}

export interface ICell {
  isOpen: boolean;
  isBomb: boolean;
  isFlagged: boolean;
}
