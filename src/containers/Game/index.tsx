import Board from "../Board";
import Sidebar from "../Sidebar";
import useStyles from "./styles";
import { CircularProgress } from "@material-ui/core";
import LevelChooser from "../LevelChooser";
import { useCallback, useState } from "react";
import { Difficulty, GAME_SIZE } from "./types";
import { ICell } from "../Board/types";

const Game = () => {
  const classes = useStyles();
  const [data, setData] = useState<ICell[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>();
  const [isLoading, setIsLoading] = useState(false);

  const onLevelSelect = useCallback((difficulty: Difficulty) => {
    setDifficulty(difficulty);
    setIsLoading(true);

    setTimeout(() => {
      const arr = [];
      for(let  i = 0; i < GAME_SIZE[difficulty].width * GAME_SIZE[difficulty].height; i++){
        arr.push({
          isOpen: i % 7 === 0,
          isBomb: i % 5 === 0,
          isFlagged: i % 9 === 0,
        });
      }
      setData(arr);
      setIsLoading(false);
    }, 1000)

  }, []);
  return (
    <div className={classes.root}>
      {data && data.length && difficulty ? (
        <>
          <Board difficulty={difficulty} data={data} setData={setData} />
          <Sidebar />
        </>
      ): (
        isLoading ?
          (<div className={classes.loading}>
              <CircularProgress />
            </div>)
          :
          (<LevelChooser onSelect={onLevelSelect}/>)
      )}
  </div>)
}
// test
export default Game;
