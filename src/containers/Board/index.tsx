import { useCallback } from "react";
import classNames from 'classnames';
import { Paper } from "@material-ui/core";

import useStyles from "./styles";
import { Cell, IBoard } from "./types";
import FlagIcon from "../../componets/Icons/Flag";
import BombIcon from "../../componets/Icons/Bomb";
import { GAME_SIZE } from '../Game/types';
import { updateGame } from "../../utils/fetch/updateGame";
import indexToCoordinates from "../../utils/indexToCoordinates";
import merge from "../../utils/mergeMatrices";

const Board = ({ difficulty, gameId, data, setData }: IBoard) => {

  const onCellClick = useCallback((e, index) => {
    if(data[index].type === Cell.FLAGGED) return;

    const [y, x] = indexToCoordinates({ difficulty, index });
    updateGame({ gameId: localStorage.getItem('gameId') || '', x, y }).then((response) => {
      setData(merge(data, response.data.map.flat()));
    });
  }, [data, difficulty, setData]);

  const onCellFlag = useCallback((e, index) => {
    e.preventDefault();
    if(data[index].type === Cell.GUESSED) return;
    const newData = data.map((item, i) => {
      if (i === index) {
        return { ...item, type: item.type === Cell.FLAGGED ? Cell.CLOSED : Cell.FLAGGED };
      }
      return { ...item };
    });
    console.log(newData)
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
            isOpen: item.type === Cell.OPEN,
            isBomb: item.type === Cell.BOMB,
            isFlagged: item.type === Cell.FLAGGED,
            isGuessed: item.type === Cell.GUESSED,
          })} key={i}>
          <span className={classNames(classes.content, difficulty)}>
            {item.type === Cell.OPEN && !!item.bomb_neighbors_count && item.bomb_neighbors_count}
            {(item.type === Cell.BOMB || item.type === Cell.GUESSED) && <BombIcon/>}
            {item.type === Cell.FLAGGED && <FlagIcon/>}
          </span>
        </div>
      ))
    }
  </Paper>)
};

export default Board;
