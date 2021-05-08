import { useCallback, useEffect, useState } from "react";
import classNames from 'classnames';
import { Paper } from "@material-ui/core";

import useStyles from "./styles";
import { IBoard, ICell } from "./types";

const Board = ({ size }: IBoard) => {
  const [data, setData] = useState<ICell[]>([]);
  useEffect(() => {
    const arr = [];
    for(let  i = 0; i < size*size; i++){
      arr.push({
        isOpen: i % 7 === 0,
        isBomb: i % 5 === 0,
        isFlagged: i % 9 === 0,
      });
    }
    setData(arr);
  }, [size])
  const onCellClick = useCallback((e, index) => {
    const newData = data.map((item, i) => {
      if(i === index) {
        return {...item, isOpen: true};
      }
      return {...item};
    });
    setData(newData);
  }, [data])
  const onCellFlag = useCallback((e, index) => {
    e.preventDefault();
    const newData = data.map((item, i) => {
      if(i === index) {
        return {...item, isFlagged: !item.isFlagged};
      }
      return {...item};
    });
    setData(newData);
  }, [data])
  const classes = useStyles({ size });
  return (<Paper className={classes.root} elevation={6}>
    {
      data.map((item, i) => (
        <div
          onClick={(e) => onCellClick(e, i)}
          onContextMenu={(e) => onCellFlag(e, i)}
          className={classNames(classes.cell, {
            isOpen: item.isOpen,
            // isBomb: item.isBomb,
            isFlagged: item.isFlagged,
          })} key={i}>
          <span className={classes.text}>
            {item.isOpen && i%4===0 && i}
          </span>
        </div>
      ))
    }
  </Paper>)
};

export default Board;
