import { useCallback } from "react";
import classNames from 'classnames';
import { Paper } from "@material-ui/core";

import useStyles from "./styles";
import { IBoard } from "./types";
import FlagIcon from "../../componets/Icons/Flag";
import BombIcon from "../../componets/Icons/Bomb";
import { GAME_SIZE } from '../Game/types';

const Board = ({ difficulty, data, setData }: IBoard) => {

  const onCellClick = useCallback((e, index) => {
    const newData = data.map((item, i) => {
      if(i === index) {
        return {...item, isOpen: true};
      }
      return {...item};
    });
    setData(newData);
  }, [data, setData]);

  const onCellFlag = useCallback((e, index) => {
    e.preventDefault();
    const newData = data.map((item, i) => {
      if(i === index) {
        return {...item, isFlagged: !item.isFlagged};
      }
      return {...item};
    });
    setData(newData);
  }, [data, setData]);

  const classes = useStyles({
    width: GAME_SIZE[difficulty].width,
    height: GAME_SIZE[difficulty].height,
  });
  return (<Paper className={classNames(classes.root, difficulty)} elevation={6}>
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
          <span className={classNames(classes.content, difficulty)}>
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
