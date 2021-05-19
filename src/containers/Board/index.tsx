import { useCallback } from "react";
import classNames from 'classnames';
import { Paper } from "@material-ui/core";

import useStyles from "./styles";
import { Cell, IBoard } from "./types";
import FlagIcon from "../../componets/Icons/Flag";
import BombIcon from "../../componets/Icons/Bomb";
import { GAME_SIZE, GAME_STATUS } from '../Game/types';
import { updateGame } from "../../utils/fetch/updateGame";
import indexToCoordinates from "../../utils/indexToCoordinates";
import merge from "../../utils/mergeMatrices";
import { get as getGameId } from '../../utils/gameId';

const Board = ({ difficulty, data, setData, setFlagCount, gameStatus, setGameStatus }: IBoard) => {

  const onCellClick = useCallback((e, index) => {
    if (gameStatus !== GAME_STATUS.PENDING) return;
    if (data[index].type === Cell.FLAGGED || data[index].type === Cell.OPEN) return;
    const [x, y] = indexToCoordinates({ difficulty, index });
    const gameId = getGameId() || '';
    updateGame({ gameId, x, y }).then((response) => {
      setData(merge(data, response.data.map.flat()));
      setGameStatus(response.data.status);
    });

  }, [data, difficulty, gameStatus, setData, setGameStatus]);

  const onCellFlag = useCallback((e, index) => {
    e.preventDefault();
    if (gameStatus !== GAME_STATUS.PENDING) return;
    if (data[index].type === Cell.GUESSED) return;
    const newData = data.map((item, i) => {
      if (i !== index || !(item.type === Cell.CLOSED || item.type === Cell.FLAGGED)) return { ...item };

      if (item.type === Cell.FLAGGED) {
        setFlagCount((prev: any) => prev - 1);
        return { ...item, type: Cell.CLOSED };
      }

      setFlagCount((prev: any) => prev + 1);
      return { ...item, type: Cell.FLAGGED };
    });
    setData(newData);

  }, [data, gameStatus, setData, setFlagCount]);

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
