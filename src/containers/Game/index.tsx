import Board from "../Board";
import Sidebar from "../Sidebar";
import useStyles from "./styles";
import { CircularProgress } from "@material-ui/core";
import LevelChooser from "../LevelChooser";
import { useCallback, useState } from "react";
import { Difficulty, GAME_STATUS } from "./types";
import { ICell } from "../Board/types";
import { createGame } from "../../utils/fetch/createGame";
import { set as setGameId } from '../../utils/gameId';

const Game = () => {
  const classes = useStyles();
  const [data, setData] = useState<ICell[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>();
  const [isLoading, setIsLoading] = useState(false);
  const [flagCount, setFlagCount] = useState(0);
  const [gameStatus, setGameStatus] = useState<GAME_STATUS>(GAME_STATUS.PENDING);

  const onLevelSelect = useCallback((difficulty: Difficulty) => {
    setDifficulty(difficulty);
    setIsLoading(true);

    createGame({ difficulty }).then(data => {
      setData(data.data.map.flat());
      setGameId(data.data.id);
      setIsLoading(false);
      setFlagCount(0);
      setGameStatus(GAME_STATUS.PENDING);
    });

  }, []);

  return (
    <div className={classes.root}>
      {data && data.length && difficulty ? (
        <>
          <Board
            difficulty={difficulty}
            data={data}
            setData={setData}
            setFlagCount={setFlagCount}
            setGameStatus={setGameStatus}
            gameStatus={gameStatus}
          />
          <Sidebar
            difficulty={difficulty}
            flagCount={flagCount}
            gameStatus={gameStatus}
            onLevelSelect={onLevelSelect}
            setData={setData}
          />
        </>
      ) : (
        isLoading ?
          (<div className={classes.loading}>
            <CircularProgress/>
          </div>)
          :
          (<LevelChooser onSelect={onLevelSelect}/>)
      )}
    </div>)
}

export default Game;
