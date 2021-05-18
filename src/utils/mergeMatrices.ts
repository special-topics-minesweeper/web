import { Cell, ICell } from "../containers/Board/types";

const merge = (currentData: ICell[], newData: ICell[]) => {
  return newData.map((cell, i) => (
    currentData[i].type === Cell.FLAGGED && newData[i].type === Cell.CLOSED ? { type: Cell.FLAGGED } : cell
  ));
}

export default merge;
