export interface IBoard {
  size: number;
}

export interface ICell {
  isOpen: boolean;
  isBomb: boolean;
  isFlagged: boolean;
}
