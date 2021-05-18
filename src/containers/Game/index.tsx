import Board from "../Board";
import Sidebar from "../Sidebar";
import useStyles from "./styles";
import { CircularProgress } from "@material-ui/core";
import LevelChooser from "../LevelChooser";
import { useCallback, useState } from "react";
import { Difficulty } from "./types";
import { ICell } from "../Board/types";
import { createGame } from "../../utils/fetch/createGame";

const Game = () => {
  const classes = useStyles();
  const [gameId, setGameId] = useState('');
  const [data, setData] = useState<ICell[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>();
  const [isLoading, setIsLoading] = useState(false);

  const onLevelSelect = useCallback((difficulty: Difficulty) => {
    setDifficulty(difficulty);
    setIsLoading(true);

    createGame({ difficulty }).then(data => {
      setData(data.data.map.flat());
      localStorage.setItem('gameId', data.data.id);
      setGameId(data.data.id);
      setIsLoading(false);
    });

  }, []);
  return (
    <div className={classes.root}>
      {data && data.length && difficulty ? (
        <>
          <Board difficulty={difficulty} gameId={gameId} data={data} setData={setData}/>
          <Sidebar/>
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
