import { Cell, ICell } from "../containers/Board/types";

const merge = (currentData: ICell[], newData: ICell[]) => {
  return newData.map((cell, i) => (
    currentData[i].type === Cell.FLAGGED ? (
      newData[i].type === Cell.CLOSED ?
        { type: Cell.FLAGGED } :
        { type: Cell.GUESSED }
    ) : cell
  ));
}

export default merge;
