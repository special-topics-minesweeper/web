import { useCallback, useEffect, useState } from "react";
import classNames from 'classnames';
import { Paper } from "@material-ui/core";

import useStyles from "./styles";
import { IBoard, ICell } from "./types";
import FlagIcon from "../../componets/Icons/Flag";
import BombIcon from "../../componets/Icons/Bomb";

const Board = ({ width, height }: IBoard) => {
  const [data, setData] = useState<ICell[]>([]);
  useEffect(() => {
    const arr = [];
    for(let  i = 0; i < width*height; i++){
      arr.push({
        isOpen: i % 7 === 0,
        isBomb: i % 5 === 0,
        isFlagged: i % 9 === 0,
      });
    }
    setData(arr);
  }, [width, height]);

  const onCellClick = useCallback((e, index) => {
    const newData = data.map((item, i) => {
      if(i === index) {
        return {...item, isOpen: true};
      }
      return {...item};
    });
    setData(newData);
  }, [data]);

  const onCellFlag = useCallback((e, index) => {
    e.preventDefault();
    const newData = data.map((item, i) => {
      if(i === index) {
        return {...item, isFlagged: !item.isFlagged};
      }
      return {...item};
    });
    setData(newData);
  }, [data]);

  const classes = useStyles({ width, height });
  return (<Paper className={classNames(classes.root, {
    horizontal: width > 1.5 * height,
  })} elevation={6}>
    {
      data.map((item, i) => (
        <div
          onClick={(e) => onCellClick(e, i)}
          onContextMenu={(e) => onCellFlag(e, i)}
          className={classNames(classes.cell, {
            isOpen: item.isOpen,
            isBomb: item.isBomb,
            isFlagged: item.isFlagged,
          })} key={i}>
          <span className={classes.text}>
            {item.isOpen && i%4 === 0 && 9}
            {item.isBomb && <BombIcon />}
            {item.isFlagged && <FlagIcon />}
          </span>
        </div>
      ))
    }
  </Paper>)
};

export default Board;
